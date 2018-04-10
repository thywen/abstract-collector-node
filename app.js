const express = require('express');
const http = require('http')
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//const Abstract = mongoose.mode('abstracts')

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

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  layoutsDir: `${__dirname}/${viewsDir}/layouts`,
  partialsDir: `${viewsDir}/partials`
}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/app/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  const title = 'Welcome';
  res.render('index', {
    title: title
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/abstracts', (req, res) => {
  res.render('abstracts/abstracts')
});

app.get('/abstracts/add', (req, res) => {
  res.render('abstracts/add')
});

app.post('/abstracts', (req, res) => {
  let errors = []
  if (!req.body.title) {
    errors.push({ text: "Please add a title" })
  }
  if (!req.body.details) {
    errors.push({ text: "Please add a details" })
  }
  if (errors.length > 0) {
    res.render('abstracts/add', {
      errors: errors,
      title: req.body.title,
      details: req.body.details
    })
  } else {
    res.send("Ok")
  }
});

app.listen(expressPort, () => {
  console.log(`Server started on port ${expressPort}`);
});