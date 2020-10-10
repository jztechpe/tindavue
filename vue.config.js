// vue.config.js
module.exports = {
    // options...
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/i,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts',
                        name: '[name].[ext]',
                    },
                }
            ]
        }
    },
}