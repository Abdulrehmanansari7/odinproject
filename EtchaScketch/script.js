const board = document.querySelector(".board");

const sizeButtons = document.querySelector(".sizeButtons");
const sizeBtns = sizeButtons.querySelectorAll("button");

const colorbtns = document.querySelector(".colorbtns");
const clrbtns = colorbtns.querySelectorAll("button")

let square;

sizeBtns.forEach((btn) => {
    btn.addEventListener("click", handleClick);
});

clrbtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        var clr = btn.
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
        square = document.createElement("div");
        square.style.border = "1px solid black";
        square.addEventListener("mouseover",(e) => {
            e.target.style.backgroundColor = "black"
        })
        board.appendChild(square);
    }
    
}