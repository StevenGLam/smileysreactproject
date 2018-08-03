
let path = require('path');
//let HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(path.join(__dirname,'public'));

console.log(path.join(__dirname + '/src/index.js' + 'sdad'));
module.exports={
    entry:__dirname + '/src/index.js',
     module:{

        /* loaders:[{
            test: /\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader'
        }], */

        rules:[

            {
                test: /\.js$/,
                exclude:/node_modules/,
                use:'babel-loader'
                
            }
        ]
    }, 
    

    output:{
        
        path:path.join(__dirname,'public/js'),
        filename:'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true
    } 
    /* plugins:[
        new HtmlWebpackPlugin({template: './public/index.html' })
    ] */
    
}