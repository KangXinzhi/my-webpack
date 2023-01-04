// 默认情况下，Webpack 传递给 Loader 的原始内容是一个 UTF-8 格式编码的字符串。 但是在某些场景下，加载器处理的不是文本文件，而是二进制文件
// 官网例子 通过 exports.raw 属性告诉 Webpack 该 Loader 是否需要二进制数据


module.exports = function(source) {    
  // 在 exports.raw === true 时，Webpack 传给 Loader 的 source 是 Buffer 类型的    
  source instanceof Buffer === true;    
  // Loader 返回的类型也可以是 Buffer 类型的    
  // 在 exports.raw !== true 时，Loader 也可以返回 Buffer 类型的结果    
  return source;
};
// 通过 exports.raw 属性告诉 Webpack 该 Loader 是否需要二进制数据 
module.exports.raw = true;

