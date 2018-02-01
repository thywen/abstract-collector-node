const express = require("express");
const express_handlebars = require('express-handlebars');

const app = express();

app.engine('handlebars', express_handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const port = process.env.PORT;

app.get('/', (request, response) => {
    const title = "Welcome";
    response.render("index", {
        title: title
    });
});

app.get('/about', (request, response) => {
    response.render("about");
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});