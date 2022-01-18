module.exports = {
    transpileDependencies: [
        'vuetify'
    ],
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
                pathRewrite: {'^/api' : ''},
                // rewrite:(path) => path.replace('api/', ''), Vite
                secure: false,
                logLevel: 'debug'
            },
        },
        host: 'localhost'
    }
}
