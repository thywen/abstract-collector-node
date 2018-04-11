const exphbs = require('express-handlebars');

const configureViews = (app) => {
    app.set('view engine', 'handlebars');
    app.set('views', __dirname + '/views');
    app.engine('handlebars', exphbs({
        defaultLayout: 'main',
        layoutsDir: `${__dirname}/views/layouts`,
        partialsDir: `${__dirname}/views/partials`
    }));
};

module.exports = configureViews;