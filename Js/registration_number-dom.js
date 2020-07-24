const addBtn = document.querySelector(".Addbtn");
const resetBtn = document.querySelector(".resetBtn");
const filterBtn = document.querySelector(".filterBtn")
const displayArea = document.querySelector(".displayHere");
const selectedTowns = document.querySelector(".towns");
const TextBox = document.querySelector(".inputText");
const errors = document.querySelector(".errors")


let allItems = [];

function addValues(){
     let theValue = "new element"
     if (TextBox.value){
         theValue = TextBox.value
     }
    allItems.push(theValue);

}

// my filter function
function filteredTowns() {
    displayArea.innerHTML = ""
    
    var currentTown = selectedTowns.options[selectedTowns.selectedIndex].value;  
    const filteredItems = [];
    
    for (var i = 0; i < allItems.length; i++) {
        var currentItem = allItems[i];
        if (currentItem.startsWith(currentTown)) {
            filteredItems.push(currentItem)
        }
    }
        
    displayTowns(filteredItems);
    
}

function displayTowns(reg){
    const newElement = document.createElement("li");
    newElement.innerHTML = reg;

    displayArea.insertBefore(newElement, displayArea.childNodes[0]); 
    
}

function registrations(){
    var regUser = TextBox.value
     
    if(regUser == ""){
        errors.innerHTML = "Please enter a Registration number below"
        return;
    }

    displayTowns(regUser);
    addValues(regUser)
}

resetBtn.addEventListener("click", function () {
    // clear all the list items from displaybox
    displayArea.innerHTML = "";
    allItems = [];
})
filterBtn.addEventListener("click", filteredTowns);
addBtn.addEventListener("click", registrations);

