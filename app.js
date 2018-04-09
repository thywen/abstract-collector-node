const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//const Abstract = mongoose.mode('abstracts')

const app = express();

const databaseUsername = process.env.DB_USERNAME || "nody";
const databasePassword = process.env.DB_PASSWORD || "unicorntest";
const expressPort = process.env.PORT || 5000;

mongoose.connect(`mongodb://${databaseUsername}:${databasePassword}@ds225308.mlab.com:25308/vidjod`).then(
    () => console.log("Connected to mongodb")
).catch(
    (error) => console.log(error)
);

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));
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
  
});

app.listen(expressPort, () =>{
  console.log(`Server started on port ${expressPort}`);
});