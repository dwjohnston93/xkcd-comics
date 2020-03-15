function updateHTML(comic){
    let title = document.getElementById('comic-title');
    let img = document.getElementById('comic-img');
    if(title.innerHTML){
        title.innerHTML = `#${comic.num} ${comic.title}`;
        img.src = comic.img;
        img.alt = comic.alt;
    } else{
        title.innerHTML = `#${comic.num} ${comic.title}`;
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

let baseURL = "http://localhost:8080"

//GET KEYBOARD ENTER FOR THIS TOO
const getNum = () => {
    let number = document.getElementById("search").value;
    let numObj = {num : number};
    console.log("numObj:", numObj)
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
        console.log("comic:", comic)
        updateHTML(comic)
    })
}

const getRandom = () => {
    const promise = fetch(`${baseURL}/random`);
    promise.then(res => {
        return res.json();
    }).then(comic => {
        console.log("comic:", comic)
        updateHTML(comic)
    })
}

const getPrev = () => {
    const promise = fetch(`${baseURL}/prev`);
    promise.then(res => {
        return res.json();
    }).then(comic => {
       updateHTML(comic)
    })
}

const getNext = () => {
    const promise = fetch(`${baseURL}/next`);
    promise.then(res => {
        return res.json();
    }).then(comic => {
        updateHTML(comic)
    })
}

