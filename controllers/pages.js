exports.index = (req, res) => {
    const data = {
        message: 'Hello, World'
    };
    res.render('main/main', Object.assign(data, req.commonData));
};

exports.error404 = (req, res) => res.sendStatus(404);
