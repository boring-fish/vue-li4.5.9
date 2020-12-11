'use strict';
// const path = require('path');

// const resolve = dir => {
//   return path.join(__dirname, dir);
// };

const BASE_URL = '/';

module.exports = {
  publicPath: BASE_URL,
  outputDir: 'host',
  assetsDir: '',
  lintOnSave:true,
  runtimeCompiler:true,
  indexPath: 'index.html',
  pages: undefined,
  productionSourceMap: false,
  devServer: {
    port: 3200,
    disableHostCheck: true,
    //反向代理
    proxy: {
      '/api': { //需要代理的接口
        target:'https://service-hg5j94q2-1302382638.gz.apigw.tencentcs.com', //目标服务器
        changeOrigin: true,　　　　　　 //是否跨域
        pathRewrite: {
          '^/api': '' //重定向
        }
      }
    }
  },
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        },
        prependData: `@import 'css-builder/themes/default.less';`
      }
    },
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      return [
        {
          ...args[0],
          title: 'Linkflow-CMS'
        }
      ];
    });
    // if (process.env.NODE_ENV === 'production') {
    //   config
    //     .plugin('uglifyjs-plugin')
    //     .use('uglifyjs-webpack-plugin', [{
    //       uglifyOptions: {
    //         warnings: false,
    //         compress: {
    //           drop_console: true,
    //           drop_debugger: false,
    //           pure_funcs: ['console.log']
    //         }
    //       }
    //     }])
    //     .end();
    //   // config
    //   //   .plugin('gzip-plugin')
    //   //   .use('compression-webpack-plugin', [{
    //   //     filename: '[path].gz[query]',
    //   //     algorithm: 'gzip',
    //   //     test: /\.js$|\.html$|\.json$|\.css$|\.ttf$/,
    //   //     threshold: 0, // 只有大小大于该值的资源会被处理
    //   //     minRatio:0.8, // 只有压缩率小于这个值的资源才会被处理
    //   //     deleteOriginalAssets: true // 删除原文件
    //   //   }])
    //   //   .end();
    // }
  }
};