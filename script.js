// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordDisplay = document.getElementById("password");

var passLength = 0 ;
var specChar = 0;
var numChar = 0;
var upperChar = 0
var allUpperChar = 0;

var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberString = "0123456789";
var specString = "!@#$%^&*()_-+={[}]|;:,<.>/?`~'";

function lengthPrompt (){
  passLength = window.prompt("Enter the number of characters you wish to generate:\nMust be between 8 and 128");
  if (passLength < 8 || passLength > 128) {
    window.alert("Invalid Entry. Please Try again");
    lengthPrompt()
  }
}
function specCharacterPrompt(){
  specChar = window.prompt("Do you want to include special charaters in your password?\nPlease type Y or N:");
  switch(specChar.toUpperCase()){
    case "YES": case "Y": specChar = true; return specChar;
    case "NO": case "N": specChar = false; return specChar;
    default:  window.alert("Invalid Entry. Please Try again");
    specCharacterPrompt();
  }
}
function numberPrompt(){
  numChar = window.prompt("Do you want to include numbers in your password?\nPlease type Y or N:");
  switch(numChar.toUpperCase()){
    case "YES": case "Y": numChar = true; return numChar;
    case "NO": case "N": numChar = false; return numChar;
    default:  window.alert("Invalid Entry. Please Try again");
    numberPrompt();
  }
}
function upperPrompt(){
  upperChar = window.prompt("Do you want to include uppercase letters in your password?\nPlease type Y or N:");
  if (upperChar.toUpperCase() === "YES" || upperChar.toUpperCase() === "Y") {
    upperChar = true;
    allUpperChar = window.prompt("Do you want ALL letters to be uppercase in your password?\nPlease type Y or N:");
      switch(allUpperChar.toUpperCase()){
      case"YES": case "Y": allUpperChar = true; return allUpperChar;
      case "NO": case "N": allUpperChar = false; return allUpperChar;
      default:  window.alert("Invalid Entry. Please Try again");
      upperPrompt();
      }
  } else if (upperChar.toUpperCase() === "NO" || upperChar.toUpperCase() === "N") {
    upperChar = false;
    allUpperChar = false;
    return;
  } else {
    window.alert("Invalid Entry. Please Try again");
    allUpperPrompt();
  }
}
// Write password to the #password input
function promptUser(){
  lengthPrompt();
  specCharacterPrompt();
  numberPrompt();
  upperPrompt();
}

function writePassword() {

  promptUser();
  passwordString = "";

  if (upperChar === true){
    passwordString = passwordString.concat(upperCaseString);
  }
  if ( allUpperChar === false ||( upperChar === false && numChar === false && specChar === false )){
    passwordString = passwordString.concat(lowerCaseString);
  }
  if(numChar === true){
    passwordString = passwordString.concat(numberString);
  }
  if(specChar === true){
    passwordString = passwordString.concat(specString);
  }

  passwordCharArray = passwordString.split('');
  var password = "";
  for (i = 0; i < passLength; i++){
    var j = Math.floor(Math.random()*1000)%(passwordCharArray.length);
    password = password.concat(passwordCharArray[j]);
  }

  passwordDisplay.setAttribute("placeholder", password);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// CONSOLE TEST VALUES !!! ****

