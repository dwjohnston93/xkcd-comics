//function updates HTML with latest comic received from server, and current comic number
function updateHTML(comic){
    let title = document.getElementById('comic-title');
    let img = document.getElementById('comic-img');
    if(title.innerHTML){
        title.innerHTML = `#${comic.num} ${comic.title}`;
        img.src = comic.img;
        img.alt = comic.alt;
        comicNum = comic.num
    } else{
        title.innerHTML = `#${comic.num} ${comic.title}`;
        img.src = comic.img;
        img.alt = comic.alt;
        comicNum = comic.num
        //add prev and next buttons to page after intial random call
        let prev = document.createElement('button');
        let next = document.createElement('button');
        prev.setAttribute("onclick","getPrev()");
        next.setAttribute("onclick","getNext()");
        let buttons = document.getElementById('buttons');
        prev.innerText = "<Prev";
        next.innerText = "Next>";
        prev.className = "button"
        next.className = "button"
        buttons.prepend(prev);
        buttons.appendChild(next);
    }
   
}

let baseURL = "http://localhost:8080"

let comicNum;
let latestComic;

//gets latest comic number for form validation controls
const getHighest = () => {
    const promise = fetch(`${baseURL}/highest`);
    promise.then(res => {
        return res.json();
    }).then(max => {
        latestComic = max.num;
        let input = document.getElementById('search');
        input.max = max.num;
    })
}

const getNum = () => {
    let number = document.getElementById("search").value;
    let numObj = {num : number};
    const promise = fetch(`${baseURL}/num`, {
        method : 'POST',
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json" 
        },
        body : JSON.stringify(numObj)
    });
    promise.then(res => {
        return res.json();
    }).then(comic => {
        updateHTML(comic)
    })
}

const getRandom = () => {
    const promise = fetch(`${baseURL}/random`);
    promise.then(res => {
        return res.json();
    }).then(comic => {
        updateHTML(comic)
    })
}

const getPrev = () => {
    if(comicNum === 1){
        alert("You are at the first comic");
        return;
    }
    const promise = fetch(`${baseURL}/prev`);
    promise.then(res => {
        return res.json();
    }).then(comic => {
       updateHTML(comic)
    })
}

const getNext = () => {
    if(comicNum === latestComic){
        alert("You are at the latest comic");
        return;
    }
    const promise = fetch(`${baseURL}/next`);
    promise.then(res => {
        return res.json();
    }).then(comic => {
        updateHTML(comic)
    })
}

