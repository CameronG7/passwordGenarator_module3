// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() 
{
	var password = generatePassword();
	var passwordText = document.querySelector("#password");
	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() 
{
	//create variables using user input from functions
	let lengthSet = passwordLength();
	let charChoice = specialChar();
	let charList = "";
	let generatedPassword = "";

	// The AC is not REALLY explicit on if I should have multiple choices for the user to include different characters 
	// but in todays online world passwords are either bad(alphanumeric based) or use special characters so I'm looking
	// out for the user and making them use all or none 
	if (charChoice === false) 
	{
		charList = 'abcdefghijklmnopqrstuvwxyz';
	} else // default for password strength is all chars not be basic ones. escape backslashes to ensure all chars are included.
	{
		charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&\"'()*+,-./:;<=>?@[\\]^_`{|}~"
	}
	
	for (i = 0; i < lengthSet; i++) // for the length of the password chosen, at each index of the string generate a random char and add it to the string
	{
		generatedPassword += charList.charAt(Math.round(Math.random() * charList.length)); 
		// I was shown .floor to genertate a random integer, but .round exists?? and .floor is bad fake rng so I'm using .round
	}

	return generatedPassword;
}

function passwordLength() //sets length for the password to be generated. Alerts user if the constraints are not met, and calls itself again.
{
	const lengthChoice = prompt(
		"How many characters would you like your password to be? Choose a number between 8 and 128"
	);

	if (lengthChoice < 8 || lengthChoice > 128) 
    {
		alert("Please choose a number between 8 and 128");
		passwordLength();
	} else
	{
		return parseInt(lengthChoice, 10); 
		// I was expecting to have to parse this to a number later, 
		// but the function failed to return me a string??? so i just parsed it here and returned it.
	}
}
	
function specialChar() //returns a boolean depending on the choice of the user wanting to include special characters
{
  const specialCharChoice = confirm(
    "Would you like to include special characters? This will include uppercase, numbers, and special characters."
  );

  if (specialCharChoice === true) 
  {
    return true;
  } else 
  {
    return false;
  }
}

