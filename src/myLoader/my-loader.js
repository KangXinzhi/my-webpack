const loaderUtils = require('loader-utils')

module.exports = function (source) {
  // 开始缓存
  // this.cacheable && this.cacheable();

  // 关闭缓存
  this.cacheable && this.cacheable(false);

  // 获取参数
  const options = loaderUtils.getOptions(this);

  // 在这里按照你的需求处理 source
  return source.replace('world', `I am KangXinzhi2 ${options?.flag}`);
}