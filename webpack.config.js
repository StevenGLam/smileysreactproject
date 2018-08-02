
let path = require('path');
console.log(path.join(__dirname,'public'))

console.log(path.join(__dirname + '/src/index.js' + 'sdad'))
module.exports={
    entry:__dirname + '/src/index.js',
     module:{

        loaders:[{
            test: /\.js$/,
            exclude:/node_modules/,
            //loader:'babel-loader'
        }]
    }, 
    mode:'development',

    output:{
        
        path:path.join(__dirname,'public/js'),
        filename:'bundle.js'
    },
  /*   devServer: {
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true
    } */
}