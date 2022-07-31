import './index.css'
// 打包css 主要是看 js的部分
// 因為webpack只會打包 js, 所以剩下 的檔案需要引入 js
// 讓webpack知道 這個東西也需要跟著被打包

// 在webpack 設定可以將 路徑存取變數, @test
// 將會存取"絕對路徑" 

console.log('hi!!');
alert('hi!!');

// const path = require('path');

const imgElement = document.createElement('img')
imgElement.src = require('./78783.PNG')
imgElement.style.border = '10px solid red'
document.querySelector('body').appendChild(imgElement)

class Test {
    #a =1
}

let tt = new Test()
console.log('tt: ', tt.a)