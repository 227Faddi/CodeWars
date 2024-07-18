// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// My Solution

// P - Parameters
//  2 string with the player choice

// R - Return
// a string that says who won in base of the parameters

// E - Examples 
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// P - Pseudocode
// if statements for every possibility

const rps = (p1, p2) => {
    if(p1 === 'scissors' && p2 === 'paper'){
        return "Player 1 won!"
    } else if(p1 === 'rock' && p2 === 'scissors'){
        return "Player 1 won!"
    } else if(p1 === 'paper' && p2 === 'rock'){
        return "Player 1 won!"
    } else if(p1 === p2){
        return "Draw!"
    } else{
        return "Player 2 won!"
    }
};