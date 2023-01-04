//  处理异步
module.exports = function (source) {
  // 告诉 Webpack 本次转换是异步的，Loader 会在 callback 中回调结果
  var callback = this.async()
  // someAsyncOperation 代表一些异步的方法
  someAsyncOperation(source, function (err, result, sourceMaps, ast) {
    // 通过 callback 返回异步执行后的结果
    callback(err, result, sourceMaps, ast)
  })
};


// this.callback(    
//   // 当无法转换原内容时，给 Webpack 返回一个 Error   
//   err: Error | null,    
//   // 原内容转换后的内容    
//   content: string | Buffer,    
//   // 用于把转换后的内容得出原内容的 Source Map，方便调试
//   sourceMap?: SourceMap,    
//   // 如果本次转换为原内容生成了 AST 语法树，可以把这个 AST 返回,以方便之后需要 AST 的 Loader 复用该 AST，以避免重复生成 AST，提升性能 
//   abstractSyntaxTree?: AST
// );
