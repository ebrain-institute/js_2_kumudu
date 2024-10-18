
function plus(){
  //Get the two numbers
  let firstNumber = document.getElementById('firstNumber').value;
  let seccondNumber = document.getElementById('seccondNumber').value;
  //Validation
  if(firstNumber === "" || seccondNumber ===""){
    document.getElementById('error').style.visibility = "visible";
  }else{
    //Plus those number 
    let total = parseInt(firstNumber) + parseInt(seccondNumber);
    //Print the total in the element
    document.getElementById('output').innerHTML = total;
    document.getElementById('error').style.visibility = "hidden";
  }   
}


function minus(){
    //Get the two numbers
    let firstNumber = document.getElementById('firstNumber').value;
    let seccondNumber = document.getElementById('seccondNumber').value;
    //Validation
    if(firstNumber === "" || seccondNumber ===""){
      document.getElementById('error').style.visibility = "visible";
    }else{
      //Plus those number 
      let total = parseInt(firstNumber) - parseInt(seccondNumber);
      //Print the total in the element
      document.getElementById('output').innerHTML = total;
      document.getElementById('error').style.visibility = "hidden";
    }   
  }


// Todo APP Code

// Selecting elements form the DOM
const taskInput  = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList   = document.getElementById('task-list');


// Fucntion to add a new task
function addTask(){

  //Trim the value from input
  const taskText = taskInput.value.trim();

  //Check if its empty
  if(taskText === ''){
    alert('Please Enter a task!');
    return;
  }

  //Create new LI element in the memory and save it to a varialbe
  let liElement = document.createElement('li');

  // Use that vairable and add input text to li
  liElement.textContent = taskText;


  //Create a delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  // Event listner for remove child 
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(liElement);
  });

  liElement.append(deleteBtn);

  // Put that newly crated li into ul in the DOM
  taskList.append(liElement);

}


// Event listener
addTaskBtn.addEventListener('click', addTask);