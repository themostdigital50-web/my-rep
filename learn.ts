import * as readline from "node:readline";

type Choice = "rock" | "paper" | "scissors";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let humanScore = 0;
let computerScore = 0;
const totalRounds = 5;

function getComputerChoice(): Choice {
    const choices: Choice[] = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function PlayerChoice(round: number = 1): void {
    rl.question(`Round ${round}/${totalRounds} - throw either rock, paper or scissors: `, (answer: string) => {
        const playerChoice = answer.trim().toLowerCase();

        if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
            console.log("Please choose rock, paper, or scissors please.");
            PlayerChoice();
            return;
        }

        const computerChoice = getComputerChoice();
        console.log(`Computer chose ${computerChoice}.`);

        if (playerChoice === computerChoice) {
            console.log("Draw");
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log("You win!");
        } else {
            computerScore++;
            console.log("Computer wins!");
        }

        console.log(`Score: You ${humanScore} - Computer ${computerScore}`);

        if (round === totalRounds) {
            console.log("Game over!");
            rl.close();
            return;
        }

        PlayerChoice(round + 1);
    });
}

PlayerChoice();
