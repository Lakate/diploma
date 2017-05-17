'use strict';

const express = require('express');
const app = express();

const path = require('path');

const hbs = require('hbs');

const viewsDir = path.join(__dirname, 'bundles');

app.set('views', viewsDir);
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, 'blocks'));

app.set('port', (process.env.PORT || 8080));

app.use((req, res, next) => {
    req.commonData = {
        meta: {
            description: 'Hahaton',
            charset: 'utf-8'
        },
        page: {
            title: 'PhotoQuest'
        },
        isDev: true
    };

    next();
});

require('./routes.js')(app);

app.listen(app.get('port'),
    () => console.log(`Listening on port ${app.get('port')}`));

module.exports = app;
