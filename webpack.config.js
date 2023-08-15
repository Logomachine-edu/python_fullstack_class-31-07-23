const path = require('path')

module.exports = {
    entry: {
        filename: path.resolve(__dirname, 'src/js/index.js'),
    },
    output: {        
        path: path.join(__dirname, 'dist', 'js'), // сборка пути из имен директорий и файлов
        filename: '[name][contenthash].js',
    },
    devServer: {
        port: 9000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist'),
            // watch: true
        }
    }
}