'use strict'

const Promise = require('bluebird')
const fs = require('fs')
const layouts = require('handlebars-layouts')

const handlebars = require('hbs').handlebars
handlebars.registerHelper(layouts(handlebars))
handlebars.registerPartial('base', fs.readFileSync('./bundles/base.hbs', 'utf8'))

exports.index = (req, res) => {
  const template = handlebars.compile(fs.readFileSync('./bundles/main/main.hbs', 'utf8'))
  const data = {
    currentCity: 'Екатеринбург'
  }
  res.send(template(Object.assign(data, req.commonData)))
}

exports.companies = (req, res) => {
  const template = handlebars.compile(fs.readFileSync('./bundles/companies/companies.hbs', 'utf8'))
  const data = {
    currentCity: 'Екатеринбург'
  }
  res.send(template(Object.assign(data, req.commonData)))
}

exports.hr = (req, res) => {
  const template = handlebars.compile(fs.readFileSync('./bundles/hr/hr.hbs', 'utf8'))
  const data = {
    currentCity: 'Екатеринбург'
  }
  res.send(template(Object.assign(data, req.commonData)))
}

exports.profile = (req, res) => {
  const template = handlebars.compile(fs.readFileSync('./bundles/profile/profile.hbs', 'utf8'))
  const data = {
    currentCity: 'Екатеринбург'
  }
  res.send(template(Object.assign(data, req.commonData)))
}

exports.rel = (req, res) => {
  const template = handlebars.compile(fs.readFileSync('./bundles/relationship/relationship.hbs', 'utf8'))
  const data = {
    currentCity: 'Екатеринбург'
  }
  res.send(template(Object.assign(data, req.commonData)))
}

exports.error404 = (req, res) => res.sendStatus(404)
