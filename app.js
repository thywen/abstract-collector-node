const express = require('express');
const middlewares = require('./app/middlewares')
const configureViews = require('./app/views');
const routes = require('./app/routes')
const db = require('./app/database')

const app = express();

const expressPort = process.env.PORT || 5000;

app.use(middlewares)
app.use(routes)
configureViews(app)

let server = app.listen(expressPort, () => {
  console.log(`Server started on port ${expressPort}`);
});

module.exports = server
