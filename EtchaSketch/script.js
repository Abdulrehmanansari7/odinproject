const board = document.querySelector(".board");

const sizeButtons = document.querySelector(".sizeButtons");
const sizeBtns = sizeButtons.querySelectorAll("button");

const colorbtns = document.querySelector(".colorbtns");
const clrbtns = colorbtns.querySelectorAll("button")

let clr = "black";
let isDrawing = false;

document.addEventListener("mouseup",() => {
    isDrawing = false
})

sizeBtns.forEach((btn) => {
    btn.addEventListener("click", handleClick);
});

clrbtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        clr = e.target.textContent.toLowerCase();
        console.log(clr);
    })
})

function handleClick(e) {
    const size = Number(e.target.dataset.size); // e.g. 16, 32

    // clear old grid
    board.innerHTML = "";

    // set grid dynamically
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const total = size * size;
    
    for (let i = 0; i < total; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        board.appendChild(square);
    }
    
}

board.addEventListener("mousedown", (e) => {
    if (e.target !== board) {
        isDrawing = true;
        e.target.style.backgroundColor = clr;
    }
});

board.addEventListener("mouseover", (e) => {
    if (e.target !== board && isDrawing) {
        e.target.style.backgroundColor = clr;
    }
});