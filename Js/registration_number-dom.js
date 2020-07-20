const addBtn = document.querySelector(".Addbtn");
const resetBtn = document.querySelector(".resetBtn");
const displayArea = document.querySelector(".displayHere");
const selectedTowns = document.querySelector(".towns");
const TextBox = document.querySelector(".inputText");
const errors = document.querySelector(".errors")


var regStorage = localStorage.getItem('regEntered') ? JSON.parse(localStorage.getItem('regEntered')) : [];
var registrations = regNumbers(regStorage);

function display(reg){
    const newElement = document.createElement("li");
    newElement.innerHTML = reg;

    displayArea.insertBefore(newElement, displayArea.childNodes[0]); 

}

function displayRegistrations(){
    var regUser = TextBox.value
     


    if(regUser == ""){
        errors.innerHTML = "Please enter a registration number below"
        return;
    }
    //displayArea.innerHTML = regUser
    display(regUser);
    //const newElement = document.createElement("li");
    //if (regUser) {
       // newElement.innerHTML = regUser; 
    //} else  {
        //newElement.innerHTML = "old element";
        //displayArea.appendChild(newElement);   
    //}
}


function clear(){
    registrations.clearItems();
    displayArea.innerHTML = "My new element";
    

}
resetBtn.addEventListener("click", clear);
addBtn.addEventListener("click", displayRegistrations);

