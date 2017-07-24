var path = require('path');

module.exports = {
    entry:'./src/js/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'./dist'),
        publicPath:'/'
    },
    module:{
        rules:[
            {test:/\.scss$/,loaders:'style-loader!css-loader!sass-loader'},
            {test:/\.html$/,loaders:'html-loader'},
            {test:/\.png$/,loaders:'url-loader'}
        ]
    }
};