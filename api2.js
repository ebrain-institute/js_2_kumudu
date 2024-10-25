
//API

//Synchornous

//Asynchronous 


// console.log('Step 1: start'); //Synchornous

setTimeout(()=>{

    // console.log('Step 2: Async oparation (timeout) complete'); //Asynchronous 

}, 5000 );

// console.log('Step 3: End') //Synchornous



//Promise

function mockApiRequest(){
    return new Promise((resolve, reject)=>{
            setTimeout(()=>{
               const success = true;
               if(success){
                resolve("Data received");
               }else{
                reject("Error: request failed");
               }
            }, 2000);
    });
}

// Using the promise 
// mockApiRequest()
// .then(data => console.log(data))
// .catch(error => console.log(error));


// API fetch with promise 

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(data  => console.log(data))
.catch(error => console.error(error) );


// Async await

const fetchPost = async ()=> {
// async function fetchPost(){
     try{
        const response =  await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data  = await response.json();
        console.log(data);
        
    }
        catch(error){
        console.error(error)
    }

}

fetchPost();