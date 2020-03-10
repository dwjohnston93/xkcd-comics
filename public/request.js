function getRandom(){
    const promise = fetch("http://localhost:8080/random")
    promise.then(resp => console.log("resp:", resp.json()))
    .catch((error) => {
        console.log("e:", error)
    })
}