const button = document.querySelectorAll("button");
const log = document.getElementById("log");
let playerScore = 0;
let computerScore = 0;
const ppoint = document.querySelector(".ppoint");
const cpoint = document.querySelector(".cpoint");

button.forEach((btn) => {
  btn.addEventListener("click",handleClick);
})

function getComputerChoice() {
  const arr = ["rock", "paper", "scissor"];
  let sign2 = arr[Math.floor(Math.random() * arr.length)];
  const computerBoard = document.querySelector(".computerBoard");
  computerBoard.textContent = `Computer choose ${sign2}`
  computerBoard.style.display = "block"
  return sign2;
}

function getHumanChoice(sign) {
  const playerBoard = document.querySelector(".playerBoard");
  playerBoard.textContent = `Player Chooses : ${sign}`; 
  playerBoard.style.display = "block"
  return sign;
}

function round(cscore, pscore) {
  if (cscore === 5) {
    log.style.fontSize = "80px";
    log.innerText = "Computer won";
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } else if (pscore === 5) {
    log.style.fontSize = "80px";
    log.innerText = "Player won";
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
}

function playRound(comp, hum) {
  if (
    (hum === "rock" && comp === "paper") ||
    (hum === "paper" && comp === "scissor") ||
    (hum === "scissor" && comp === "rock")
  ) {
    log.innerHTML = "<h2>Computer Won</h2>"
    computerScore += 1;
    cpoint.innerHTML = computerScore;
  } else if (
    (hum === "rock" && comp === "scissor") ||
    (hum === "paper" && comp === "rock") ||
    (hum === "scissor" && comp === "paper")
  ) {
    log.innerHTML = "<h2>Player Won</h2>"
    playerScore += 1;
    ppoint.innerHTML = playerScore;
  } else {
    log.innerHTML = "<h2>Draw</h2>"
  }
  round(computerScore, playerScore);
}

function handleClick(e){
  let sign = e.target.value
  playRound(getComputerChoice(), getHumanChoice(sign));
}
  
