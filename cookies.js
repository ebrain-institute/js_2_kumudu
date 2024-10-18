

// Cookies - 4kb - server /browser / only string

// Set cookie
document.cookie = "name=jhon; expires="+ new Date(9999, 0,1).toString();
document.cookie = "age=35";

//Get cookie
const myCookies = document.cookie;
console.log(myCookies)


// Session Storage  5mb - only tab / only string 
sessionStorage.setItem('name', 'bob');

//Get seession storage

const mySession = sessionStorage.getItem('name');
console.log(mySession);

// Remove session
// sessionStorage.removeItem('name');
// sessionStorage.clear()


//Local storage - 10mb - only browswer / only string

localStorage.setItem('name', '[a,b,c,d]');

// Get Local storage 

const myLocalStorage = localStorage.getItem('name');
console.log(myLocalStorage)

//Remove local storage
// localStorage.removeItem('name');
// localStorage.clear();


// Save object in local storage 

let myObj = {
    name: 'jhon',
    age: 55
}

// Stringify to json object 

let my_converted_obj = JSON.stringify(myObj);

localStorage.setItem('myObj', my_converted_obj);

let getMyObj = localStorage.getItem('myObj');

console.log(getMyObj)
let convertToObject = JSON.parse(getMyObj);

console.log(myObj);
console.log(convertToObject);