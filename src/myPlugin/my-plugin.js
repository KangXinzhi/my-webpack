// 借助两个事件：
// done：在成功构建并且输出了文件后，Webpack 即将退出时发生；
// failed：在构建出现异常导致构建失败，Webpack 即将退出时发生；

class MyPlugin {
  constructor(doneCallback, failCallback) {
    // 存下在构造函数中传入的回调函数
    this.doneCallback = doneCallback;
    this.failCallback = failCallback;
  }

  apply(compiler) {
    compiler.plugin('done', (stats) => {
        // 在 done 事件中回调 doneCallback
        console.log('doneCallback',stats)
        this.doneCallback(stats);
    });
    compiler.plugin('failed', (err) => {
        // 在 failed 事件中回调 failCallback
        console.log('failCallback',err)
        this.failCallback(err);
    });
  }
}
// 导出插件 
module.exports = MyPlugin;