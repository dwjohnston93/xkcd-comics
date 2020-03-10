const express = require('express');
const app = express();
const serveIndex = require('serve-index');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile('public/index.html', { root: __dirname });
});

app.get('/random', (req, res) => {
    res.json({a : 1})
});

app.listen(8080, () => console.log('app listening on port 8080'));