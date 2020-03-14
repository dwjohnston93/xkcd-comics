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
        let prev = document.createElement('button');
        let next = document.createElement('button');
        prev.setAttribute("onclick","getPrev()");
        next.setAttribute("onclick","getNext()");
        let buttons = document.getElementById('buttons');
        prev.innerText = "<Prev";
        next.innerText = "Next>";
        buttons.prepend(prev);
        buttons.appendChild(next);
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
    const promise = fetch("http://localhost:8080/next");
    promise.then(res => {
        return res.json();
    }).then(comic => {
        updateHTML(comic)
    })
}

