const mongoose = require('mongoose');

const databaseUsername = process.env.DB_USERNAME || "nody";
const databasePassword = process.env.DB_PASSWORD || "unicorntest";

const db = mongoose.connect(`mongodb://${databaseUsername}:${databasePassword}@ds225308.mlab.com:25308/vidjod`).then(
    () => console.log('Connected to mongodb')
).catch(
    (error) => console.log(error)
);

module.exports = db