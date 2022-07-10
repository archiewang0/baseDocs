const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 因為 package 有將cmd 的指令記錄下 "set NODE_ENV=DDD && webpack"
// 的指令,會將該變數 變成DDD 之後以下都是正常JS操作了
console.log(process.env.NODE_ENV)

// webpack基本設計
module.exports = {

    // 也可以在 package.json 裡面 script 使用指令達成 (範例一)
    // 就不需要這禮拜入 mode: ... 
    // 範例一: 'set NODE_ENV=ddd && webpack --mode development'
    // mode: 'development', //選擇打包模式
    // mode: 'production',

    // 入口
    entry: './src/index.js',

    // 出口 打包完之後 名稱可以自定義
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'main.bundle.js',
        filename: 'main.[hash].bundle.js', //產生流水號的 bundle
    },

  // 開啟 webpack serve 的參數
    devServer: {
        // 開啟 serve 之後固定已某個路徑為基準點, (起serve後進入localhost的第一頁面)
        contentBase: path.join(__dirname, 'dist'), //contentBase 之後會被 static 給替換掉
        // static: {
        //     directory: path.join(__dirname, "public")
        // },

        // 起sever的port號
        port: 3010,
    },

    // 在瀏覽器 開啟devtool 會告知source的檔案
    devtool: 'source-map',

    // 當js 引入不同檔案時(如: css, scss, jpeg, gif , jsx ,ts等等)
    // webpack 基本設置只能夠打包 js 的部分, 引入其他檔案到js的部分則無法打包
    // 如果需要進行打包的話需要使用module 來讓webpack知道怎麼幫打包
    module: {
        // 告知 webpack 遇到甚麼檔案時, 該使用哪個套件來進行打包
        // rules: [
        //     {
        //         test: /\.css$/i,
        //         use: ['style-loader', 'css-loader'],
        //     },
        // ],

        // 當使用 plugins 打包css
        // 也可以將 js 引入 css 的module 做更替
        rules: [
            {
                test: /\.css$/i,
                use: [miniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                // 加入babel
                //  
                use: {
                    loader: "babel-loader",
                }
            },
            // 加入img 的部分
            // img 打包, 須讓js引入img, 或是讓js引入css在引入img (這樣也可以讓img 被打包)
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            
        ],
    },

    // plugins 主要負責 打包 js以外的檔案(如: html ,css, scss, ts 等等)
    // 但css 還是需要由 js 引入, 不引入css 則不會打包該 css(html引入沒用)
    plugins: [
        // 刪除文之前打包的檔案
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './templateHtml.html'
        }),
        new miniCssExtractPlugin({
            filename: 'main.[hash].bundle.css', 
        })
    ]
};

