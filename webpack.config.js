var path = require('path');

var htmlPugin = require('html-webpack-plugin');
module.exports ={
    entry:'./src/main.js',
    output:{
        path:path.resolve('./dist'),
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {test:/\.js$/,loader:'babel-loader',exclude:/node_modules/},
            {test:/\.css$/,loader:'style-loader!css-loader'},
            {test:/\.vue$/,loader:'vue-loader'}


        ]
    },
    plugins:[
        new htmlPugin({
            template:'./src/index.html'
        })
    ]
}