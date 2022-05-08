var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", passwordInt);

function passwordInt() {
  //Password settings
  let pwLength = window.prompt("Please enter desired password length (8-128 characters)", "")
  if (pwLength > 128) {
    window.alert("Too many characters.")
    return
  }
  if (pwLength < 8) {
    window.alert("Too many characters.")
    return
  }
  let pwSymbols = window.confirm("Would you like special characters in this password?")
  let pwUpCase = window.confirm("Would you like uppercase letters in this password?")
  let pwLowCase = window.confirm("Would you like lowercase letters in this password?")
  let pwNumbers = window.confirm("Would you like numbers in this password?")
  if ((pwSymbols == false) && (pwUpCase == false) && (pwLowCase == false) && (pwNumbers == false) == true) {
    window.alert("You must accept at least one criteria to generate password.")
    return
  }
  // Password Character List Confirmation
  var characters = ""
  if (pwUpCase == true) 
    characters = characters.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  if (pwLowCase == true)
    characters = characters.concat("abcdefghijklmnopqrstuvwxyz")
  if (pwSymbols == true)
    characters = characters.concat("!@#$%^&*()")
  if (pwNumbers == true)
    characters = characters.concat("0123456789")
  console.log(characters)
 //Random string generation
  var password = "";
  var charactersLength = characters.length
  for (var i = 0; i < pwLength; i++ )
    password += characters.charAt(Math.floor(Math.random() * charactersLength));
  console.log(password);
  document.querySelector("#password").setAttribute("placeholder", password)
}

