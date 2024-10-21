module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true,
      compiler: 'webpack5',
    }],
	//'module:metro-react-native-babel-preset',
	//'module:@react-native/babel-preset',
	//'@wyw-in-js/babel-preset',
	'@wyw-in-js',
	//'@linaria'
  ],
  plugins: [
   ["@babel/plugin-proposal-decorators", { "version": "legacy" }],
   //["@babel/plugin-transform-class-properties", { "loose": true }],
   ["@babel/plugin-transform-private-methods", {"loose": true}],
   //["@babel/plugin-transform-react-jsx", {"runtime": "automatic"}]
  ]
}
