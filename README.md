# webpack 基本

[參考網站] (https://webpack.js.org/)

> package.json 使用版本
> ```
> "devDependencies": {
>   "webpack": "^5.38.1",
>   "webpack-cli": "^4.7.2",
>   "webpack-dev-server": "^3.11.2"
>  }
> ```

## entry
入口(從哪個地方打包)

## output
出口(打包完成放到哪個地方)

## devServer

使用webpack serve 
可以帶入參數 
改變port號 `port [number]`
起sever後的第一個頁面 `contentBase [string(path)]` (較早的版本)
`static [object]` (之後的版本)

也可不用, 之後可能用nodejs 建置server 取代掉

## 指令碼
使用 watch 的功能只需在指令 加上 webpack --watch
即可監聽 專案下的檔案是否變動並重新打包

set NODE_ENV=ccc && webpack 
帶入環境變數(可以改變 webpack的打包方式)

--mode production 
--mode development
可以在直接帶入 webpack mode 的部分, 則webpack.config.js 可以刪除 mode的部分(因為指令會直接帶入)

