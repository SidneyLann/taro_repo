const { shaker } = require('@wyw-in-js/transform');
const path = require('path');

module.exports = {
  evaluate: true,
  displayName: false,
  rules: [
  {
    action: shaker,
  },
  {
    test: /[\\/]node_modules[\\/](?!@tarojs)/,
    action: 'ignore',
  },
  {
    test: (filename, code) => {
      if (!/[\\/]node_modules[\\/]/.test(filename)) {
        return false;
      }
 
      return /(?:^|\*\/|;|})\s*(?:export|import)[\s{]/m.test(code);
    },
    action: shaker,
  },
  ],
  tagResolver: (source, tag) => {
    const pathToLocalFile = 'jcss/custom';
    if (source === pathToLocalFile) {
      if (tag === 'css') {
        return require.resolve('@linaria/core/processors/css');
      }
 
      if (tag === 'styled') {
	    console.log(source+' wyw '+tag)
        return require.resolve('@linaria/react/processors/styled');
      }
    }
 
    return null;
  },
};