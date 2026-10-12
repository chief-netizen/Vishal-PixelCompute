
let createPage = function () {
    let notesContainer = document.getElementById("Notes-Container");
    let template = document.getElementById("card-template");
    let textBox = document.getElementById("Input-Box");


    let newPage = template.content.cloneNode(true);

    let content = newPage.querySelector(".card__content");
    let close = newPage.querySelector(".red.box");

    
    content.textContent = textBox.value;

    
    close.addEventListener("click", function () {
        destroyPage(close);
    });

   
    notesContainer.appendChild(newPage);

    
    textBox.value = "";
};

let destroyPage = function (close) {
    let parentElement = close.closest(".card");
    parentElement.remove();
};

let addPage = document.getElementById("add-note");
addPage.addEventListener("click", createPage);
