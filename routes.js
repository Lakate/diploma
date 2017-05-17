'use strict';

const pages = require('./controllers/pages');

module.exports = function (app) {
    app.get('/', pages.index);

    app.all('*', pages.error404);
};
