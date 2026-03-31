let currentPlayer = "X";
let arr = Array(9).fill(null);
const statement = document.querySelector(".statement");
const p = document.querySelector("p");
let flag = false;

function winning(player){
    if(arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2] ||
       arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5] ||
       arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8] ||
       arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6] ||
       arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7] ||
       arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8] ||
       arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8] ||
       arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6] 
    ){
        p.innerText = `Winner is ${player}`
        statement.style.display = "flex"
        // flag = true;
        return true;
    }
    return false
}

function checkDraw(id){
    if(!arr.includes(null)){
        p.innerText = "The Game is Draw "
        statement.style.display = "flex"
        flag = true;
    }
}

function handleClick(el){
    if(flag) return;
    let id  = el.id;
    if(arr[id] !== null) return;
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    if(winning(currentPlayer)){
        flag = true;
        return;
    }
    checkDraw(id)
    currentPlayer = currentPlayer === "X" ? "O" : "X"
}

function restart(){
    window.location.reload()
}