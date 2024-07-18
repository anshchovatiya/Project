let ToDoArray = [];


function loadLocalData() {
    let tempArray = JSON.parse(localStorage.getItem("Array"));
    ToDoArray = tempArray;
    ToDoArray.forEach((current) => {
        let outputContainer = document.getElementById("todo-items");
        let newElementconainer = document.createElement("div");
        newElementconainer.innerHTML = `<div class="todoContainer"><p class="todoContent">${current}</p><button class="todoButton DeleteButton" >Delete</button></div>`;
        outputContainer.append(newElementconainer);
    });
}

if (localStorage.getItem("Array")) {
    loadLocalData();
}

document.getElementById("submit").addEventListener("click", () => {

    // manage current items
    let currentItems = document.getElementById("todo-current-item");
    if (currentItems.value == "") {
        return;
    };

    let Item = currentItems.value.trim();

    // manage html elements
    if (!ToDoArray.includes(Item)) {
        let outputContainer = document.getElementById("todo-items");
        let newElementconainer = document.createElement("div");
        newElementconainer.innerHTML = `<div class="todoContainer"><p class="todoContent">${Item}</p><button class="todoButton DeleteButton" >Delete</button></div>`;
        outputContainer.append(newElementconainer);
        ToDoArray.push(Item);

        // ----------------------------------------

        let newSetArray = [... new Set(ToDoArray)];
        localStorage.setItem("Array", JSON.stringify(newSetArray));
        // ----------------------------------------
    }
    currentItems.value = "";

});

function removeElement(button) {
    let text = button.previousSibling.innerText;
    if (ToDoArray.includes(text)) {
        ToDoArray.splice(ToDoArray.indexOf(text), 1);
    }
    localStorage.setItem("Array", JSON.stringify(ToDoArray));

    button.parentElement.remove();

};

document.getElementById("todo-items").addEventListener("click", (event) => {
    let clickedElementButton = event.target;
    if (clickedElementButton.classList.contains("DeleteButton")) {
        removeElement(clickedElementButton);
    }
});