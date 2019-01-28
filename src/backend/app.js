const express = require('express');
const app = express();
const port = 3000;
const tvshow = require('./tvshowslist');

app.get('/rest/shows', (req, res) => {
    res.send(tvshow());
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));