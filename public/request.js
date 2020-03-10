// function getRandom(){
//     const promise = fetch("http://localhost:8080/random")
//     promise.then(resp => updateHTML(resp.json()))
//     .catch((error) => {
//         console.log("e:", error)
//     })
// }

// const getRandom = function(){
//     let res = await fetch("http://localhost:8080/random");
//     updateHTML(res.json())
// }

// const getRandom = function(){
//     return new Promise(function(resolve){
//         resolve(fetch("http://localhost:8080/random"));
//     })
// }

// async function updateHTML(){
//     let comic  = await getRandom();
//     console.log("comic:", comic);
//     let img = document.createElement('img');
//     console.log("comic.img:", comic.img)
//     img.src = comic.img;
//     document.body.append(img);
// }

const getRandom = () => {
    const promise = fetch("http://localhost:8080/random");
    promise.then(res => {
        return res.json();
    }).then(comic => {
        console.log("comic:", comic)
        let title = document.createElement('h2');
        title.innerHTML = comic.title;
        document.body.append(title);
        let img = document.createElement('img');
        img.src = comic.img;
        img.alt = comic.alt;
        document.body.append(img);
    })
}

