const express = require('express');
const app = express();
const path = require('path');
const fetch = require("node-fetch");
const bodyParser = require('body-parser');

app.listen(8080, () => console.log('app listening on port 8080'));

app.use(express.static(path.join(__dirname, 'public')))

//parse application/json
app.use(bodyParser.json());

//most recent XKCD comic number which will be updated after initial page load through latestComic
let latestNum;

//currently displayed or request comic number
let currentNum;

app.get('/', (req, res) => {
    latestComic()
    res.sendFile('public/index.html', { root: __dirname });
});


app.post('/num', (req, res) => {
    currentNum = req.body.num;
    const prevComic = fetch(`http://xkcd.com/${currentNum}/info.0.json`);
    prevComic.then(response => {
     return response.json();
    }).then(data => {
        res.json(data)
    }).catch(error => {
    console.log("e:", error);
    });
});

app.get('/random', (req, res) => {
    currentNum = getRandomInt(1, latestNum)
    const randomComic = fetch(`http://xkcd.com/${currentNum}/info.0.json`);
    randomComic.then(response => {
     return response.json();
    }).then(data => {
        res.json(data)
    }).catch(error => {
    console.log("e:", error);
    });
});

app.get('/prev', (req, res) => {
    currentNum--;
    const prevComic = fetch(`http://xkcd.com/${currentNum}/info.0.json`);
    prevComic.then(response => {
     return response.json();
    }).then(data => {
        res.json(data)
    }).catch(error => {
    console.log("e:", error);
    });
});

app.get('/next', (req, res) => {
    currentNum++;
    const prevComic = fetch(`http://xkcd.com/${currentNum}/info.0.json`);
    prevComic.then(response => {
     return response.json();
    }).then(data => {
        res.json(data)
    }).catch(error => {
    console.log("e:", error);
    });
});

app.get('*', function(req, res){
    res.sendFile('public/404.html', { root: __dirname });
  });

//updates the latestNum for use in the random call
const latestComic = fetch('http://xkcd.com/info.0.json');
latestComic.then(response => {
  return response.json()
  .then(data => {
    latestNum = data.num;
    return;
  })
}).catch(error => {
    console.log("e:", error);
  });

//generates random number between 0 and latest comic issue number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


