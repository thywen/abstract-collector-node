const express = require('express');
const http = require('http')
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const middlewares = require('./app/middlewares')
const configureViews = require('./app/views');
const routes = require('./app/routes')

const app = express();

const databaseUsername = process.env.DB_USERNAME || "nody";
const databasePassword = process.env.DB_PASSWORD || "unicorntest";
const expressPort = process.env.PORT || 5000;
const viewsDir = 'app/views'


mongoose.connect(`mongodb://${databaseUsername}:${databasePassword}@ds225308.mlab.com:25308/vidjod`).then(
  () => console.log('Connected to mongodb')
).catch(
  (error) => console.log(error)
);

app.use(middlewares)
app.use(routes)
configureViews(app)

app.listen(expressPort, () => {
  console.log(`Server started on port ${expressPort}`);
});