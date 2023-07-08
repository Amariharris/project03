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

function generatePassword(){
  var upperChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  var lowerChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  var numbChars = ["0","1","2","3","4","5","6","7","8"];

  var specialChars = ["!","@","#","$","%","^","&","*"];

  var allChars = upperChars.concat(lowerChars, numbChars, specialChars);

  console.log(allChars);

  var Chars = confirm("Would you like Capital letters?");
confirm("would you like special characters?");
confirm("Include special characters?");

for (let i = 1; i <= 8; i++) {
  var allChars = Math.floor(Math.random()
   .toString+ 8);
    
  pass += str.charAt(char)
}

return generatePassword;
// prompt how many characters
// var for characters

// what type of characters
// special,number,upper,lower
// window.confirm

// use answer to generate password
// vars include all possible characters
// seperate vars for each type, arrays
// example var upper ["A", "B", "C"]

// take all true arrays and concat into new array
// choose random chars from arr based on user input
// var push into new array
// var password = turn array into string ".toString()"

//return password
}