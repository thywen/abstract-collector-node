const express = require('express');
const middlewares = require('./app/middlewares');
const configureViews = require('./app/views');
const routes = require('./app/routes');

const path = require('path');

const app = express();

const expressPort = process.env.PORT || 5000;

app.use(middlewares);
app.use(routes);
configureViews(app);

if (process.env.PROD === 'true') {
  require('./app/database');
}

app.use(express.static(path.join(__dirname, 'public')));

let server = app.listen(expressPort, () => {
  console.log(`Server started on port ${expressPort}`);
});

module.exports = server;
