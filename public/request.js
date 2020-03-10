function updateHTML(comic){
    let title = document.getElementById('comic-title');
    let img = document.getElementById('comic-img');
    if(title.innerHTML){
        title.innerHTML = comic.title;
        img.src = comic.img;
        img.alt = comic.alt;
    } else{
        title.innerHTML = comic.title;
        img.src = comic.img;
        img.alt = comic.alt;
        //add prev and next buttons to page after intial random call
        // let prev = document.createElement('button');
        // let next = document.createElement('button');
        // let buttons = document.getElementById('buttons');
        // buttons.appendChild(prev)
        // buttons.appendChild(next);
        // prev.onclick = "getPrev";
        // next.onclick = "getNext";
        // prev.innerHTML = "<Prev";
        // next.innerHTML = "Next>";
    }
   
}

const getRandom = () => {
    const promise = fetch("http://localhost:8080/random");
    promise.then(res => {
        return res.json();
    }).then(comic => {
        updateHTML(comic)
    })
}

const getPrev = () => {
    const promise = fetch("http://localhost:8080/prev");
    promise.then(res => {
        return res.json();
    }).then(comic => {
       updateHTML(comic)
    })
}

const getNext = () => {
    console.log("next:", next)
    const promise = fetch("http://localhost:8080/next");
    promise.then(res => {
        return res.json();
    }).then(comic => {
        updateHTML(comic)
    })
}

