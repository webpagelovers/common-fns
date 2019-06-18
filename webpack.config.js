const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname + '/examples/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            chunks: ['index'],
            title: 'common-fns for examples',
            template: './examples/index.html'
        })
    ],
    module: {
        rules: []
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'examples'),
        host:
            'localhost',
        port: 8000,
        //open: true,
        hot: true,
        inline: true
    }
}