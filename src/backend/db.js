require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = process.env.DB_URL_PRD;

const index = url.lastIndexOf("kodflix-copy");
const database = url.substr(index, 12);
const fullURL = url + process.env.DB_URL_PRD_PARAMS + '&w=majority&collection=kodflix-copy';

 function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(fullURL, { useUnifiedTopology: true }, { useNewUrlParser: true },  function (err, db) {
            assert.equal(null, err);
            const dbo = db.db(database);
            resolve(dbo);
        });
    });
}

 module.exports = { connect }
