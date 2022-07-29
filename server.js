console.log('testes')

const fs = require('fs')
const https = require('https')
var express = require('express')
const app = express()
var router = express.Router()
var serveIndex = require('serve-index')
const path = require('path')
const serveStatic = require('serve-static')
var port = process.env.PORT || 3010

const rootPath = path.resolve(__dirname,'./')
console.log(rootPath)
// 可以讓data 不用再透過 buffer 轉換, 直接json轉換
app.use(express.json())

// app.use('/', router)

app.use(
    '/',
    serveIndex('./', {
        icons: true,
        view: 'details',
        filter: function (filename, index, files, dir) {
            if (
                filename == 'node_modules' ||
                filename == 'server.js'
            ) {
                return false
            } else {
                return true
            }
        },
    })
)

app.use(
    serveStatic(__dirname)
)


app.listen(port)