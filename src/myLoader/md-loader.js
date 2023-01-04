const { getOptions } = require('loader-utils')
const MarkdownIt = require('markdown-it')

module.exports = function (source) {
  const options = getOptions(this) || {}
  const md = new MarkdownIt({
    html: true,
    ...options,
  })
  let html = ModifyStructure(md.render(source))
  html = `module.exports = ${JSON.stringify(html)}`
  this.callback(null, html)
}

// 工具函数 自定义dom结构： 将 html 中的 h3 标签和 h2 标签包装在带有特定 class 名称的 div 中
function ModifyStructure(html) {
  // 把h3和h2开头的切成数组
  const htmlList = html.replace(/<h3/g, '$*(<h3').replace(/<h2/g, '$*(<h2').split('$*(')

  // 给他们套上 .card 类名的 div
  return htmlList
    .map(item => {
      if (item.indexOf('<h3') !== -1) {
        return `<div class="card card-3">${item}</div>`
      } else if (item.indexOf('<h2') !== -1) {
        return `<div class="card card-2">${item}</div>`
      }
      return item
    })
    .join('')
}