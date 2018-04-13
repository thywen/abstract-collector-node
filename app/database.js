const mongoose = require('mongoose');

const databaseUsername = process.env.DB_USERNAME || "nody";
const databasePassword = process.env.DB_PASSWORD || "unicorntest";
const localDB = `mongodb://${databaseUsername}:${databasePassword}@ds225308.mlab.com:25308/vidjod`
const database = process.env.MONGODB_URI || localDB

const db = mongoose.connect(database).then(
    () => console.log('Connected to mongodb')
).catch(
    (error) => console.log(error)
);

module.exports = db
