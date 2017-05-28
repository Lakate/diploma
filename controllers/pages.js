'use strict';

const Promise = require('bluebird');
const fs = require('fs');
const layouts = require('handlebars-layouts');

const handlebars = require('hbs').handlebars;
handlebars.registerHelper(layouts(handlebars));
handlebars.registerPartial('base', fs.readFileSync('./bundles/base.hbs', 'utf8'));

exports.index = (req, res) => {
    const data = {
        currentCity: 'Екатеринбург'
    };

    res.render('main/main', Object.assign(data, req.commonData));
};

exports.error404 = (req, res) => res.sendStatus(404);
