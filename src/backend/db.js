
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

 const url = 'mongodb://localhost:27017/';


 function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
            assert.equal(null, err);
            const dbo = db.db('kodflix');
            resolve(dbo);
        });
    });
}

 module.exports = { connect }
