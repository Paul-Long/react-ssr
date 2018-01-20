const path = require('path');

module.exports = {
  // JS 执行入口文件
  entry: './main_browser.js',
  output: {
    filename: 'bundle_browser.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  devtool: 'source-map' // 输出 source-map 方便直接调试 ES6 源码
};
