const express = require("express")
const app = express()
const port = process.env.PORT

app.get('/', (request, response) => {
    response.send(`Hello`)
})

app.get('/about', (request, response) => {
    response.send("Aboasdut")
})

app.listen(port, () => {
    console.log(`Server started on ${port}`)
})