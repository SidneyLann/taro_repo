import { defineConfig, type UserConfigExport } from '@tarojs/cli'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import devConfig from './dev'
import prodConfig from './prod'
const path = require('path');
const is_dev = process.env.NODE_ENV === 'development';;

// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
export default defineConfig<'webpack5'>(async (merge, { command, mode }) => {
  const baseConfig: UserConfigExport<'webpack5'> = {
    projectName: 'i_bizz_client',
    date: '2024-10-14',
    designWidth: 750,
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      375: 2,
      828: 1.81 / 2
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: [],
    defineConstants: {
    },
    copy: {
      patterns: [
      ],
      options: {
      }
    },
    framework: 'react',
    compiler: 'webpack5',
    cache: {
      enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    },
    mini: {
      postcss: {
        pxtransform: {
          enable: true,
          config: {

          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      },
      webpackChain(chain) {
        chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin)
      }
    },
    h5: {
      publicPath: '/',
      staticDirectory: 'static',
      output: {
        filename: 'js/[name].[hash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js'
      },
      miniCssExtractPluginOption: {
        ignoreOrder: true,
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[name].[chunkhash].css'
      },
      postcss: {
        autoprefixer: {
          enable: true,
          config: {}
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      },
      webpackChain(chain) {
        chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin)
      }
    },
    rn: {
      appName: 'ibapp',
      entry: 'app',
      output: {
        ios: './ios/main.jsbundle',
        iosAssetsDest: './ios',
        android: './android/app/src/main/assets/index.android.bundle',
        androidAssetsDest: './android/app/src/main/res',
        // iosSourceMapUrl: '',
        iosSourcemapOutput: './ios/main.map',
        // iosSourcemapSourcesRoot: '',
        // androidSourceMapUrl: '',
        androidSourcemapOutput: './android/app/src/main/assets/index.android.map',
        // androidSourcemapSourcesRoot: '',
      },
      postcss: {
        cssModules: {
          enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        }
      }
    },
    alias: {
	    'tsx': path.resolve(__dirname, '..', 'src'),
	    'jcss': path.resolve(__dirname, '..', 'css'),
	    'img': path.resolve(__dirname, "..", "src/static/images"),
	    'css': path.resolve(__dirname, "..", "src/static/css"),
	    'pkgcomm': path.resolve(__dirname, '..', 'src/pkgcommodity/page'),
	    'pkgorder': path.resolve(__dirname, '..', 'src/pkgorder/page'),
	    'pkglogis': path.resolve(__dirname, '..', 'src/pkglogistics/page'),
	    'pkgmall': path.resolve(__dirname, '..', 'src/pkgmall/page'),
	    'pkgsubj': path.resolve(__dirname, '..', 'src/pkgsubject/page')
  }
  }
  if (process.env.NODE_ENV === 'development') {
    // 本地开发构建配置（不混淆压缩）
    return merge({}, baseConfig, devConfig)
  }
  // 生产构建配置（默认开启压缩混淆等）
  return merge({}, baseConfig, prodConfig)
})
