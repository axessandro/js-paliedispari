// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Ask userchoice
let userChoice = "";
while (userChoice !== "dispari" && userChoice !== "pari"){
    userChoice = prompt("Dichiara pari o dispari");
    console.log(userChoice);
}

// Ask userNumber
userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log(userNumber);

// Return rndResult
const iaNumber = rndNumbGenerator(1, 5);
console.log(iaNumber);
// Return sumResult
const sumResult = sum(userNumber, iaNumber);
// Return oddOrEven Result
const isOddOrEven = oddOrEven(sumResult);
console.log(isOddOrEven);

// If isOddOrEven = userChoice
    // you win
// Else 
    // pc wins
let whoWin = "";
if (isOddOrEven === userChoice) {
    whoWin = "You win"
} else {
    whoWin = "Computer Wins"
}
console.log(whoWin);

//FUNCTIONS
/**
 * Description: Odd or even calculator
 * @param {number} sumResult
 * @returns {string}
 */
function oddOrEven(numberToCheck) {
    let mssg = "";
    if (numberToCheck % 2 === 0) {
        mssg = "pari";
    } else {
        mssg = "dispari";
    }
    return mssg;
}
/**
 * Description: sum of userNumber and iaNumber
 * @param {number} userNumber
 * @param {number} iaNumber
 * @returns {number} sum of 2 value 
 */
function sum(firstNumber, secondNumber) {
    const sumResult = firstNumber + secondNumber;
    return sumResult
}
/**
 * Description: Function generate a random number from 1 to 5
 * @returns {number} random number from 1 to 5
 */
function rndNumbGenerator(min, max) {
  const rndResult = Math.floor(Math.random() * (max - min + 1) ) + min;  
  return rndResult;
}
