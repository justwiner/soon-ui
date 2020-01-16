"use strict";
module.exports = {
    plugins:[
        require('autoprefixer')(),
        require('postcss-sprites')({
            spritePath:'./src',
            spritesmith:{
                padding: 2
            },
            filterBy: function(image){
                return new Promise(function(resolve,reject){
                    if(image.path.indexOf("spriteIMG")>=0){
                        resolve(true);
                    }else{
                        reject();
                    }
                })
            }
        })/*,
        require('postcss-px-to-viewport')({
            viewportWidth: 1920,
            viewportHeight: 1080,
            unitPrecision: 5,
            viewportUnit: 'vw',
            selectorBlackList: ["::-webkit-scrollbar","::-webkit-scrollbar-track","::-webkit-scrollbar-thumb"],
            minPixelValue: 1,
            mediaQuery: false
        })*/
    ]
};
/*if(config.sprite.open){
    module.exports.plugins.push(require('postcss-sprites')({
        spritePath:'./src',
        spritesmith:{
            padding: 2
        },
        filterBy: function(image){
            return new Promise(function(resolve,reject){
                if(_filterPath(image.path)){
                    reject();
                }else{
                    resolve(true);
                }
            })
        }
    }))
}*/

/*
let _filterPath = function (path) {
    for(let i=0; i<config.sprite.path.length; i++){
        if(path.indexOf(config.sprite.path[i])>=0){
            console.log('sprites'+path);
            return true;
        }
    }
    return false;
};*/
