let boxes = Array.from(document.getElementsByClassName("box"));
let counter = 0;
let correct = 0;

let uniqueNumbers = new Set();

while (uniqueNumbers.size < 4) {
    const num = Math.floor(Math.random() * 16) + 1;
    uniqueNumbers.add(num);
};

let uniqueArray = Array.from(uniqueNumbers);


const onClick = (currentId) => {
    let element = document.getElementById(currentId);
    if (uniqueArray.includes(Number((currentId)))) {
        element.style.backgroundColor = "green";
        correct++;
    }
    else {
        element.style.backgroundColor = "red";
        counter++;
    }

    
    if (correct == 4) {
        const winTemplate = document.getElementById("win-template");
        const winCard = winTemplate.content.cloneNode(true);
        let resultarea=document.getElementById("grid");
        resultarea.appendChild(winCard);
    }
    else if(counter == 8) {
        const loseTemplate = document.getElementById("lose-template");
        const loseCard = loseTemplate.content.cloneNode(true);
        let resultarea=document.getElementById("grid");
        resultarea.appendChild(loseCard);
    }

};

const reset = () => {
    boxes.forEach(box => {
        box.style.backgroundColor = "steelblue";
    });
    uniqueNumbers.clear();
    while (uniqueNumbers.size < 4) {
        const num = Math.floor(Math.random() * 16) + 1;
        uniqueNumbers.add(num);

    };
    uniqueArray = Array.from(uniqueNumbers);
    counter = 0;
    correct = 0;
    let displayedCard=document.querySelector(".card");
    displayedCard.remove();
};


boxes.forEach(box => {
    let currentId = box.id;
    box.addEventListener("click", () => {
        onClick(currentId);
    })
});

let resetButton = document.getElementById("reset");

resetButton.addEventListener("click", reset);


