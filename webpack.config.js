const path = require('path')
const MyPlugin = require('./src/myPlugin/my-plugin.js');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
    overlay: {
      warnings: true,
      errors: true,
    },
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'my-loader',
          options: {
            flag: true,
          },
        }],

      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'md-loader',
          },
        ],
      },
    ],
  },
  plugins:[
    // 在初始化 MyPlugin 时传入了两个参数，分别是在成功时的回调函数和失败时的回调函数；
    new MyPlugin(() => {
      // Webpack 构建成功，并且文件输出了后会执行到这里，在这里可以做发布文件操作
    }, (err) => {
      // Webpack 构建失败，err 是导致错误的原因
      console.error(err);        
    })
  ],
  resolveLoader: {
    modules: ['node_modules', './src/myLoader'],
  },
}