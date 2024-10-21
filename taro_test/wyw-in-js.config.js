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
    test: /node_modules[\/\\](?!@tarojs)/,
    action: 'ignore',
  },
  ],
  tagResolver: (source, tag) => {
    const pathToLocalFile = path.resolve(__dirname, '.', '.linaria/custom.js');
    if (source === '../../.linaria/custom') {
      if (tag === 'css') {
        return require.resolve('@linaria/core/processors/css');
      }
 
      if (tag === 'styled') {
	    console.log(source+' fuck '+tag)
        return require.resolve('@linaria/react/processors/styled');
      }
    }
 
    return null;
  },
};