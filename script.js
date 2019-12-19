// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz"
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var mixedCharacters = upperCaseCharacters + numbers + specialCharacters + lowerCaseCharacters;

var map = {
  l: lowerCaseCharacters,
  u: upperCaseCharacters,
  n: numbers,
  s: specialCharacters,
  m: mixedCharacters
};

generateBtn.addEventListener("click", function(event){
  event.preventDefault();
  var passwordLength = getPasswordLengthfromUser();
  if (passwordLength !== undefined && passwordLength !== null) {
    var passwordCharacterType = getPasswordCharacterTypeFromUser();
    if (passwordCharacterType !== "Invalid character type" && passwordCharacterType !== null) {
      var password = generatePassword(passwordLength, passwordCharacterType);
      console.log(password);
      passwordText.textContent = password;
    }
  }
});

function getPasswordLengthfromUser() {
  var passwordLengthText = prompt("Enter a number between 8 and 128 for password length.");
  if (passwordLengthText === null) {
    return null;
  }
  var passLength = parseInt(passwordLengthText);
  if (passLength >= 8 && passLength <= 128) {
    return passLength;
  }
  else if (passLength < 8 || passLength > 128) {
    alert("Password length out of range.");
  }
  else {
    alert("Invalid Password length.");          
  }

  passwordLengthText = prompt("Enter a number between 8 and 128 for password length.");
  if (passwordLengthText === null) {
    return null;
  }
  passLength = parseInt(passwordLengthText);
  if (passLength >= 8 && passLength <= 128) {
    return passLength;
  }
  else if (passLength < 8 || passLength > 128) {
    alert("Password length out of range. Click on 'Generate Password' button to try again.");
  }
  else {
    alert("Invalid Password length. Click on 'Generate Password' button to try again.");          
  } 
}


function getPasswordCharacterTypeFromUser() {
  var characterType = prompt("Enter preferred character type:" + "\n" +
                              "'s' for Special characters" + "\n" +
                              "'n' for  Numeric characters" + "\n" + 
                              "'l' for Lowercase characters" + "\n" + 
                              "'u' for Uppercase characters" + "\n" + 
                              "'m' for Mixed characters");
  
  if (characterType === null) {
    return null;
  }
  var characterTypeLower = characterType.toLowerCase();  
  if (characterTypeLower === "s" || characterTypeLower === "n" ||  characterTypeLower === "l" || characterTypeLower === "u" || characterTypeLower === "m") {
    return characterTypeLower
  }
  else {
    alert("Invalid character type.");
  }

  characterType = prompt("Enter preferred character type:" + "\n" +
                              "'s' for Special characters" + "\n" +
                              "'n' for  Numeric characters" + "\n" + 
                              "'l' for Lowercase characters" + "\n" + 
                              "'u' for Uppercase characters" + "\n" + 
                              "'m' for Mixed characters");
  console.log(characterType);
  if (characterType === null) {
    return null;
  }
  var characterTypeLower = characterType.toLowerCase();  
  if (characterTypeLower === "s" || characterTypeLower === "n" ||  characterTypeLower === "l" || characterTypeLower === "u" || characterTypeLower === "m") {
    return characterTypeLower;
  }
  else {
    alert("Invalid character type. Click on 'Generate Password' button to start again.");
  }
  return "Invalid character type";
}


function generatePassword(passwordLength, characterTypeLower) {
  var password = "";
  for (i=0; i < passwordLength; i++) {
      var char = map[characterTypeLower].charAt(Math.floor(Math.random() * map[characterTypeLower].length));
      password = password + char;
    }
  return password;
}
