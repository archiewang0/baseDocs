# webpack 基本

> package.json 使用版本
> ```
> "devDependencies": {
>    "webpack": "^5.73.0",
>    "webpack-cli": "^4.10.0",
>    "webpack-dev-server": "^4.9.3"
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