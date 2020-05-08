const themeReco = require('./themeReco.js')
const nav = require('../nav/')
const sidebar = require('../sidebar/')

module.exports = Object.assign({}, themeReco, {
  nav,
  sidebar,
  logo: '/head.png',
  search: true,
  searchMaxSuggestions: 10,
  sidebar: 'auto',
  mode: 'light',
  authorAvatar: '/head.png'
})