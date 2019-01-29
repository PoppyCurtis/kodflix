const express = require('express');
const app = express();
const port = 3001;
const getTvShowList = require('./tv-show-list');

app.get('/rest/shows', (req, res) => {
    res.send(getTvShowList());
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));