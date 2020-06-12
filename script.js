// Assignment Code
var generateBtn = document.querySelector("#generate");
// this string holds all possible letters
var allLetters = "abcdefghijklmnopqrstuvwxyz"
// this string holds all possible special characters
var allSpecial = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// Write password to the #password input
function writePassword() {
  var generatedPassword = [];
  // get the number of characters for the password
  var neededLength = prompt("How many characters should the password be?" + "\n" + "We recommend at least 10");
  if (neededLength != null) {
    // Ask if the user wants numbers in the password
    var needsNumber = confirm("Do you want numbers in the password?" + "\n" + "Press Ok for yes and Cancel for no");
    // Ask if the user wants special characters
    var needsSpecial = confirm("Do you want special characters in the password?" + "\n" + "Press Ok for yes and Cancel for no");
    // Ask if the user wants lower case letters
    var needsLower = confirm("Do you want lower case letters in the password?" + "\n" + "Press Ok for yes and Cancel for no");
    // Ask if the user wants upper case letters
    var needsUpper = confirm("Do you want UPPER CASE letters in the password?" + "\n" + "Press Ok for yes and Cancel for no");
  }

  // Create a while loop that cycles through options until the generatedPassword array is full

  while (generatedPassword.length < neededLength) {
    // generate a number between 0 and 3 to determine which type of character to check for
    var randomChar = Math.floor((Math.random() * 4));
    // If the value is wanted by the user, generate a random value and add it to the generatedPassword array
    if (randomChar === 0 && needsUpper === true) {
      // select a random value from the allLetters array
      var addChar = allLetters[Math.floor(Math.random() * allLetters.length)];
      // use .toUpperCase on the allLetters array to get upper case letters
      var addUpper = addChar.toUpperCase();
      // add the value to the generatedPassword array with .push() 
      generatedPassword.push(addUpper);
      // if the user wants lower case characters
    } else if (randomChar === 1 && needsLower === true) {
      // select a random value from the allLetters array
      var addLower = allLetters[Math.floor(Math.random() * allLetters.length)];
      // add the value to the generatedPassword array with .push()
      generatedPassword.push(addLower);
      // if the user wants numbers
    } else if (randomChar === 2 && needsNumber === true) {
      // generate a random number between 0 and 9
      var addNumber = Math.floor(Math.random() * 10);
      // add the value to the generatedPassword array with .push()
      generatedPassword.push(addNumber);
      // if the user wants special characters
    } else if (randomChar === 3 && needsSpecial === true) {
      var addSpecial = allSpecial[Math.floor(Math.random() * allSpecial.length)];
      generatedPassword.push(addSpecial);
      // if the user does not select any character types
    } else if (needsUpper === false && needsLower === false && needsNumber === false && needsSpecial === false) {
      // tell the user they need to select at least one option or exit the program
      var alert = confirm("Looks like you didn't pick any options." + "\n" + "Did you want to try again?");
      // If the user wants to try again
      if (alert === true) {
        // run function again
        writePassword();
        // if user wants to exit
      } else if (alert === false) {
        // end the loop
        break
      }
    }
  }
  
  // convert the generated password into a readable string
  var finalPassword = generatedPassword.join("");
  // determine where to put the readable password string
  var passwordText = document.querySelector("#password");
  // update the value in the text area
  passwordText.value = finalPassword;
}

// Add event listener to generate button action
generateBtn.addEventListener("click", writePassword);