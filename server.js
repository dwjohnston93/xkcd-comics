const express = require('express');
const app = express();
const serveIndex = require('serve-index');
const path = require('path');
const fetch = require("node-fetch");

app.use(express.static(path.join(__dirname, 'public')))

//most recent XKCD comic number which will be updated after initial random call
let latestNum = 2278;

app.get('/', (req, res) => {
    res.sendFile('public/index.html', { root: __dirname });
});

app.get('/random', (req, res) => {
    console.log("hit")
    const randomComic = fetch('http://xkcd.com/info.0.json');
    randomComic.then(response => {
     console.log("inside")
     return response.json();
    }).then(data => {
        console.log("data:", data)
        res.json(data)
    }).catch(error => {
    console.log("e:", error);
    });
});

app.get('*', function(req, res){
    res.sendFile('public/404.html', { root: __dirname });
  });

app.listen(8080, () => console.log('app listening on port 8080'));

//gets most current comic from XKCD updates latestNum accordingly
// const randomComic = async(url) => {
//     try{
//         const response = await fetch(url)
//         return response.json()
//     } catch (error){
//         console.log(error)
//     }
// }

// function currentComic(){
//     request('http://xkcd.com/info.0.json', { json: true }, (err, res, body) => {
//     if (err) { return console.log(err); }
//     latestNum = body.num;
//     console.log("body:", body)
//     return body 
//     });
// }
