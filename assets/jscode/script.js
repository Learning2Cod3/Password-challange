// Assignment Code
var generateBtn = document.querySelector("password");

// Write password to the #password input

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("generatepasswrod");
    var char = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 5;
    passwordText.value = password;

for(var i = 0; i <= passwordLength; i++) {
     password = Math.floor(Math.random() * char.length);
    password += char.substring(randomNumber, randomNumber +1);
 }

}

// Add event listener to generate button; this goes at the bottom and calls the function to do stuff
generateBtn.addEventListener("click", writePassword);

