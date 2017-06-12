'use strict';
const Promise = require('bluebird');

const express = require('express');
const url = require('url');
const app = express();
const listen = Promise.promisify(app.listen, { context: app });
const favicon = require('express-favicon');

const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

const hbs = require('hbs');
const registerPartials = Promise.promisify(hbs.registerPartials, { context: hbs });

const morgan = require('morgan');
const bodyParser = require('body-parser');

const viewsDir = path.join(__dirname, 'bundles');
const publicDir = path.join(__dirname, 'public');

app.use(favicon('./favicon.ico'));

app.set('views', viewsDir);
app.set('view engine', 'hbs');
app.use(morgan('dev'));
app.use(express.static(publicDir));

app.set('port', (process.env.PORT || 8080));

app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    extended: false,
    limit: '50mb'
}));

let startBlocksData = require('./startBlocksData.json');
app.use((req, res, next) => {
    let user = req.user ? req.user._json : undefined;
    req.commonData = {
        meta: {
            description: 'diploma',
            charset: 'utf-8'
        },
        page: {
            title: 'Регинас'
        },
        user: user,
        currentCity: 'Екатеринбург',
        host: url.format({
            protocol: req.protocol,
            host: req.get('host')
        }),
        common: startBlocksData,
        publicHost: '//diploma.surge.sh',
        // argv.NODE_ENV === 'development' ? '//diploma.surge.sh' : '',
        errors: []
    };
    next();
});

require('./routes.js')(app);

module.exports = registerPartials(path.join(__dirname, 'blocks'))
    .then(() => listen(app.get('port')))
    .then(() => {
        console.log(`Listening on port ${app.get('port')}`);
        return app;
    })
    .catch(error => console.error(error));
