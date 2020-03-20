// Write a function that takes user input and creates a password

// Variables
var myfirstPassword = ""
var lowerlettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperlettersArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArray = ["0", "1", "2", "3","4", "5", "6", "7", "8", "9"];
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var chooseArray = [lowerlettersArray, upperlettersArray, numbersArray, specialArray];


// Criteria Questions
var lengthCriteria = confirm("Would you like to specify password length?");
if (lengthCriteria == true) {
    var passwordminLength = prompt("Please enter a minimum length for your password");
    var passwordmaxLength = prompt("Please enter a maximum length for your password");
    var passwordLengthRange = passwordmaxLength - passwordminLength + 1;
    var passwordAdditionalLength = Math.floor(Math.random() * passwordLengthRange);
    var passwordLength = parseInt(passwordminLength) + parseInt(passwordAdditionalLength);
    // console.log("max length = " + passwordmaxLength);
    // console.log("min length = " + passwordminLength);
    // console.log("length range = " + passwordLengthRange);
    // console.log("random additional length = " + passwordAdditionalLength);
    // console.log("password length = " + passwordLength);
}
var typeCriteria = confirm("Would you like to specify password character types?");
if (typeCriteria == true) {
    var typeLower = confirm("Would you like to use lowercase character types?");
    var typeUpper = confirm("Would you like to use uppercase character types?");
    var typeNumeric = confirm("Would you like to use numeric character types?");
    var typeSpecial = confirm("Would you like to use special character types?");
}

if (typeCriteria == true) {
    var chooseArray =[];
    console.log("length is " + chooseArray.length);
    if (typeLower == true) {
        chooseArray.push(lowerlettersArray);
    }
    if (typeUpper == true) {
        chooseArray.push(upperlettersArray);
    }
    if (typeNumeric == true) {
        chooseArray.push(numbersArray);
    }
    if (typeSpecial == true) {
        chooseArray.push(specialArray);
    }
    console.log("length is now " + chooseArray.length);
    console.log(chooseArray);
}
// based on that input and returns it
function generatePassword() {
    var passwordAdditionalLength = Math.floor(Math.random() * passwordLengthRange);
    var passwordLength = parseInt(passwordminLength) + parseInt(passwordAdditionalLength);
    var j = 10;
    if (lengthCriteria == true) {
        var j = passwordLength;
    }
    
    // Will produce 10-i random numbers
    for (var i = 0; i < j; i++) {

    var arrayLength = chooseArray.length
    var num = Math.floor(Math.random() * arrayLength);
    // var choice = chooseArray[num];

    console.log(num)
    
    
// instead of all the combinations just figure out how to remove from the original array

// something broke with choose array, last pull was working


    if (num == 0) {
        var arrayChoice = chooseArray[0]
        var choiceLength = arrayChoice.length
        var selection = Math.floor(Math.random() * choiceLength);
        var choice = arrayChoice[selection]
    }
    if (num == 1) {
        var arrayChoice = chooseArray[1]
        var choiceLength = arrayChoice.length
        var selection = Math.floor(Math.random() * choiceLength);
        var choice = arrayChoice[selection]
    }
    if (num == 2) {
        var arrayChoice = chooseArray[2]
        var choiceLength = arrayChoice.length
        var selection = Math.floor(Math.random() * choiceLength);
        var choice = arrayChoice[selection]
    }
    if (num == 3) {
        var arrayChoice = chooseArray[3]
        var choiceLength = arrayChoice.length
        var selection = Math.floor(Math.random() * choiceLength);
        var choice = arrayChoice[selection]
    }
    console.log(choice);

    var myfirstPassword = myfirstPassword + choice;
    console.log(myfirstPassword)
    }
    var newlength = j + 9;
    var myPassword = myfirstPassword.slice(9, newlength);
    console.log(myPassword);
    console.log(passwordLength)


    var finalPass = document.querySelector("#password").select();
    document.querySelector("#previousGenerated").innerHTML += "<li>" + myPassword + "</li>" + "<br>";

    return myPassword;


   // Generate random number between 0-9
    // var num = Math.floor(Math.random() * 10);



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


var copyBtn = document.querySelector("#copy");

function exectureCopy() {
    document.querySelector("#password").select();
    document.execCommand("Copy");
    alert("Password is copied to clipboard");
}

copyBtn.addEventListener("click", exectureCopy);
// document.execcommand("Copy")