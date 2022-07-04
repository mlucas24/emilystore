const PASSWORD = require("./PASSWORD.js");
const mongoose = require('mongoose');

mongoose.connect(
    `mongodb+srv://mattlucascodes:${PASSWORD}@storefront.mzjqb.mongodb.net/storefront?retryWrites=true&w=majority`, {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        dbName: "StoreFront"
    }
);
let db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to the StoreFront Database!'));
module.exports = db;