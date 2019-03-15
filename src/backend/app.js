const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
const db = require('./db');

db.connect().then(dbo => {
    app.get('/rest/shows', (req, res) => {
        dbo.collection('shows').find({}).toArray((err, results) => {
            if (err) throw err;
            res.send(results);
        });
    });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

});