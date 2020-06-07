const appData = require('./data.json')
const seller = appData.seller
const goods = appData.goods
const rating = appData.ratings
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                import: ['./src/theme']
            }
        }
    },
    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: true
        }
    },
    // 数据接口
    devServer: {
        before(app) {
            app.get('/api/seller', function(req, res) {
                res.json({
                    errno: 0,
                    data1: seller
                })
            })
            app.get('/api/goods', function(req, res) {
                res.json({
                    errno: 0,
                    data: goods
                })
            })
            app.get('/api/rating', function(req, res) {
                res.json({
                    errno: 0,
                    data: rating
                })
            })
        }
    },
    chainWebpack(config) {
        config.resolve.alias
            .set('components', resolve('src/components'))
            .set('common', resolve('src/common'))
            .set('api', resolve('src/api'))
    }
}