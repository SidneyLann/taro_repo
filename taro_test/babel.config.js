// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true,
      compiler: 'webpack5',
    }]
  ],
  plugins: [
   ["@babel/plugin-proposal-decorators", { "version": "legacy" }],
   ["@babel/plugin-transform-class-properties", { "loose": true }],
   ["@babel/plugin-transform-private-methods", {"loose": true}],
  ]
}
