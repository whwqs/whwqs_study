'use strict'
const path = require('path')

function resolve(dir){
    return path.join(__dirname,dir)
}

module.exports = {
    publicPath:'/'
    ,devServer:{
        open:true,
        port:7800
    }
    ,configureWebpack:{
        resolve:{
            alias:{
                '@':resolve("src")
            }
        }
    }
}