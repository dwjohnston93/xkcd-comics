function getRandom(){
    const promise = fetch("http://localhost:8080/random")
    promise.then(resp => updateHTML(resp.json()))
    .catch((error) => {
        console.log("e:", error)
    })
}

function updateHTML(comic){
    console.log("comic:", comic)
    document.createElement(img)
}