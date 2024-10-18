// API

// API Reqeust method -  [GET, POST, PUT, PATCH, DELETE];


function fetchData(){

    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    const outPutDiv = document.getElementById("output");

     fetch(url)
     .then(response => response.json())    // Parsing the response to JSON
     .then(data => {
        outPutDiv.innerHTML = 
        `
        <h3>${data.title} </h3>
        <p>${data.body} </p>
        `
     } )

}

// fetch()
// .then()
// .then()
// .then()
// .finally()