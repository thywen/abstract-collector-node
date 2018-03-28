const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();
const databaseUsername = process.env.DB_USERNAME || "nody";
const databasePassword = process.env.DB_PASSWORD || "unicorntest";
const expressPort = process.env.PORT || 5000;

mongoose.connect(`mongodb://${databaseUsername}:${databaseUsername}@ds225308.mlab.com:25308/vidjod`).then(
    () => console.log("Connected to mongodb")
).catch(
    (error) => console.log(error)
);

// Handlebars Middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


// Index Route
app.get('/', (req, res) => {
  const title = 'Welcome';
  res.render('index', {
    title: title
  });
});

// About Route
app.get('/about', (req, res) => {
  res.render('about');
});


app.listen(expressPort, () =>{
  console.log(`Server started on port ${expressPort}`);
});