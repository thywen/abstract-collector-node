const express = require('express');
const http = require('http')
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const middlewares = require('./app/middlewares')
const configureViews = require('./app/views');

const app = express();

const databaseUsername = process.env.DB_USERNAME || "nody";
const databasePassword = process.env.DB_PASSWORD || "unicorntest";
const expressPort = process.env.PORT || 5000;
const viewsDir = 'app/views'

const abstractsController = require('./app/controllers/abstractsController'),
  homeController = require('./app/controllers/homeController')

app.use('/', homeController)
app.use('/abstracts', abstractsController)

mongoose.connect(`mongodb://${databaseUsername}:${databasePassword}@ds225308.mlab.com:25308/vidjod`).then(
  () => console.log('Connected to mongodb')
).catch(
  (error) => console.log(error)
);

// app.engine('handlebars', exphbs({
//   defaultLayout: 'main',
//   layoutsDir: `${__dirname}/${viewsDir}/layouts`,
//   partialsDir: `${viewsDir}/partials`
// }));
// app.set('view engine', 'handlebars');
// app.set('views', __dirname + '/app/views');

app.use(middlewares)
configureViews(app)

app.listen(expressPort, () => {
  console.log(`Server started on port ${expressPort}`);
});