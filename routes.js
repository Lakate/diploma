'use strict'

const pages = require('./controllers/pages')

module.exports = function (app) {
  app.get('/', pages.index)

  app.get('/companies', pages.companies)
  app.get('/hr', pages.hr)
  app.get('/profile', pages.profile)
  app.get('/rel', pages.rel)

  app.all('*', pages.error404)
}
