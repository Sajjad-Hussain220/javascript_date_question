//! chapter 26_30

//*q1
// var userInput = prompt("Please enter a positive integer:");
// var number = parseInt(userInput);

// var roundedValue = Math.round(userInput);
// var floorValue = Math.floor(userInput);
// var ceilValue = Math.ceil(userInput);

// document.write("Number: " + number + "<br>");
// document.write("Rounded Value: " + roundedValue + "<br>");
// document.write("Floor Value: " + floorValue + "<br>");
// document.write("Ceil Value: " + ceilValue + "<br>");

//*q2
// var userInput = prompt("Please enter a negative floating-point number:");
// var number = parseFloat(userInput);

// if (!isNaN(number) && number < 0) {
//     var roundedValue = Math.round(userInput);
//     var floorValue = Math.floor(userInput);
//     var ceilValue = Math.ceil(userInput);

//     document.write("Number: " + number + "<br>");
//     document.write("Rounded Value: " + roundedValue + "<br>");
//     document.write("Floor Value: " + floorValue + "<br>");
//     document.write("Ceil Value: " + ceilValue + "<br>");
// } else {
//     document.write("Invalid input. Please enter a negative floating-point number.");
// }

//*q3
// var number = prompt("Enter a number:");
// var absoluteValue = Math.abs(number);

// document.write("The absolute value of " + number + " is " + absoluteValue);

// *q4
// var diceValue = Math.ceil(Math.random() * 6);
// document.write("random dice value : " + diceValue);

//*q5
// var diceValue = Math.ceil(Math.random() * 2);
// if (diceValue == 1){
//     document.write(diceValue+"<br>random coin value Tails");
// }
// else{
//     document.write(diceValue+"<br>random coin value heads");
// }


//*q6
// var randomNumber = Math.ceil(Math.random() * 100) + 1;

// document.write("Random number between 1 and 100: " + randomNumber);

// *q7
// var number = prompt("Enter your weight :");
// var result = parseInt(number);
// document.write("the weight of user is " + result +"kilograms");

// *q8
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var userGuess = prompt("Guess the secret number (between 1 and 10):");

// userGuess = parseInt(userGuess);
// if (userGuess >= 1 && userGuess <= 10) {
//     if (userGuess === secretNumber) {
//         alert("Congratulations! You guessed the secret number.");
//     } else {
//         alert("Sorry, the secret number was " + secretNumber + ". Try again!");
//     }
// }else
// {
//     alert("input wrong information")
// }