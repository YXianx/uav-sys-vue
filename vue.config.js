const { defineConfig } = require('@vue/cli-service')

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const ElmentPlus = require('unplugin-element-plus/webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://192.168.5.18:10060/api',
        pathRewrite: {
          '^/api': '' 
        },
        changeOrigin: true
      }
    },
  },
  configureWebpack:{
    resolve:{
      alias:{

      }
    },
    plugins:[
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      ElmentPlus()
    ]
  }
})
