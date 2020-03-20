// Write a function that takes user input and creates a password

// Variables
var lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"]
var numbersArray = ["0", "1", "2", "3","4", "5", "6", "7", "8", "9"]


// Criteria Questions
var lengthCriteria = confirm("Would you like to specify password length?");
if (lengthCriteria == true) {
    var passwordminLength = prompt("Please enter a minimum length for your password");
    var passwordmaxLength = prompt("Please enter a maximum length for your password");
    var passwordLengthRange = passwordmaxLength - passwordminLength + 1;
    var passwordAdditionalLength = Math.floor(Math.random() * passwordLengthRange);
    var passwordLength = parseInt(passwordminLength) + parseInt(passwordAdditionalLength);
    console.log("max length = " + passwordmaxLength);
    console.log("min length = " + passwordminLength);
    console.log("length range = " + passwordLengthRange);
    console.log("random additional length = " + passwordAdditionalLength);
    console.log("password length = " + passwordLength);
}
var typeCriteria = confirm("Would you like to specify password character types?");
if (typeCriteria == true) {
    var typeLower = confirm("Would you like to use lowercase character types?");
    var typeUpper = confirm("Would you like to use uppercase character types?");
    var typeNumeric = confirm("Would you like to use numeric character types?");
    var typeSpecial = confirm("Would you like to use special character types?");
}
// based on that input and returns it
function generatePassword() {

    var j = 10
    if (lengthCriteria == true) {

    }
    
    // Will produce 10-i random numbers
    for (var i = 0; i < j; i++) {

    // Generate random number between 0-9
    var num = Math.floor(Math.random() * 10);
    }
















    /****
     * WRITE YOUR CODE HERE
     */
    // alert("I am in generate password");
  
    // return "sometext";
  }
  
  //////////////////////////////////////////////////////////////
  // DO NOT TOUCH THE CODE BELOW
  //////////////////////////////////////////////////////////////
  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);


// Series of prompts for password criteria
// Password criteria prompt and I select which criteria to include in the password
// Length prompt
// ex. at least 8 characters and no more than 128 characters
// Character type prompt
// ex. lowercase, uppercase, numeric, and/or special characters
// Input validation prompt and make sure at least one character type is selected
// Password generated
// Password displayed in an alert or written to the page