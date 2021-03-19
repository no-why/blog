const themeConfig = require('./config/theme/')

module.exports = {
  description: 'Just do it.',
  base: '/blog/',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  title: 'jmatic-blog',
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: [{'@vuepress/medium-zoom': {selector: 'img.zoom-custom-imgs'}}, 'flowchart'] 
}  
