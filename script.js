
let playerName = ""; 

window.addEventListener("load", () => {
    playerName = prompt("Enter Your Name:"); 

    if (playerName) {
        const playerTag = document.querySelector(".player");
        playerTag.textContent = playerName;
    } else {
        alert("No Username Entered.");
    }
});

const choices = ["stone", "paper", "scissor"];
const computertag = document.getElementById("computertag");
const resultdisplay = document.getElementById("resultdisplay");
const playerScoreTag = document.getElementById("playerScore");
const computerScoreTag = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;

function playgame(playerchoice) {
    const computerchoice = choices[Math.floor(Math.random() * choices.length)];

    let resultt = "";
    if (playerchoice === computerchoice) {
        resultt = "IT'S A TIE!";
    } else {
        switch (playerchoice) {
            case "stone":
                resultt = (computerchoice === "scissor") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissor":
                resultt = (computerchoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                resultt = (computerchoice === "stone") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    
    if (resultt === "YOU WIN!") {
        playerScore++;
    } else if (resultt === "YOU LOSE!") {
        computerScore++;
    }

   
    playerScoreTag.textContent = playerScore;
    computerScoreTag.textContent = computerScore;
    document.getElementById("usertag").textContent = `${playerName}: ${playerchoice}`;
    computertag.textContent = `Computer: ${computerchoice}`;
    resultdisplay.textContent = resultt;
}
