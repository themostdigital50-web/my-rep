"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("node:readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let humanScore = 0;
let computerScore = 0;
const totalRounds = 5;
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}
function getPlayerChoice(round = 1) {
    rl.question(`Round ${round}/${totalRounds} - throw either rock, paper or scissors: `, (answer) => {
        const playerChoice = answer.trim().toLowerCase();
        if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
            console.log("Please choose rock, paper, or scissors.");
            getPlayerChoice();
            return;
        }
        const computerChoice = getComputerChoice();
        console.log(`Computer chose ${computerChoice}.`);
        if (playerChoice === computerChoice) {
            console.log("Draw!");
        }
        else if ((playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            console.log("You win!");
        }
        else {
            computerScore++;
            console.log("Computer wins!");
        }
        console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
        if (round === totalRounds) {
            console.log("Game over!");
            rl.close();
            return;
        }
        getPlayerChoice(round + 1);
    });
}
getPlayerChoice();
