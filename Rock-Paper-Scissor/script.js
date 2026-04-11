const button = document.querySelector("button");
const log = document.getElementById("log");
let playerScore = 0;
let computerScore = 0;
const ppoint = document.querySelector(".ppoint");
const cpoint = document.querySelector(".cpoint");

function getComputerChoice() {
  const arr = ["rock", "paper", "scissor"];
  let sign2 = arr[Math.floor(Math.random() * arr.length)];
  console.log(`Computer Chooses : ${sign2}`);
  return sign2;
}

function getHumanChoice(sign) {
  console.log(`Player Chooses : ${sign}`);
  return sign;
}

function round(cscore, pscore) {
  if (cscore === 5) {
    log.style.fontSize = "30px";
    log.innerText = "Computer won";
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  } else if (pscore === 5) {
    log.style.fontSize = "30px";
    log.innerText = "Player won";
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
}

function playRound(comp, hum) {
  if (
    (hum === "rock" && comp === "paper") ||
    (hum === "paper" && comp === "scissor") ||
    (hum === "scissor" && comp === "rock")
  ) {
    console.log("computer won");
    computerScore += 1;
    cpoint.innerHTML = computerScore;
  } else if (
    (hum === "rock" && comp === "scissor") ||
    (hum === "paper" && comp === "rock") ||
    (hum === "scissor" && comp === "paper")
  ) {
    console.log("Player won");
    playerScore += 1;
    ppoint.innerHTML = playerScore;
  } else {
    console.log("Draw");
  }
  round(computerScore, playerScore);
}

button.addEventListener("click", () => {
  let sign = prompt("Choose Rock,Paper,Scissor");
  sign = sign.toLowerCase();

  if (!sign) {
    log.innerText = "OK, maybe next time.";
    return;
  } else if (
    sign.toLowerCase() !== "rock" &&
    sign.toLowerCase() !== "paper" &&
    sign.toLowerCase() !== "scissor"
  ) {
    log.innerText = "choose from those three";
    return;
  } else {
    log.innerText = `You Choose ${sign}`;
  }
  // getComputerChoice();
  // getHumanChoice(sign)
  playRound(getComputerChoice(), getHumanChoice(sign));
});
