/* Hardcoded values */
let userNameData = ["jcruz", "leaser"];
let leasingRepData = ["leaser"];
let passwordData = ["12345", "54321"];

let userData = [
	{
		userName: "jcruz",
		apt: "Axiom La Jolla",
		fName: "Jonah",
		lName: "Cruz",
		email: "jcruz@example.com",
		password: "12345",
		isLeasingRep: false
	}, 
	{
		userName: "leaser",
		apt: "Axiom La Jolla",
		fName: "Lisa",
		lName: "Leaser",
		email: "lisa@example.com",
		password: "54321",
		isLeasingRep: true
	}
]

let apartments = ["Axiom La Jolla", "Casa Mira View", "Costa Verde", 
				  "Regents La Jolla", "Renaissance Apartments"];

var currentUser = "jcruz";

/**
 * Populates apartments you can sign into
 */
function populateApts () {

	let apts = document.getElementById("apts");

	if (apts != null) {
		apartments.forEach(function(apartment) {
	   		let option = document.createElement("option");
	   		option.value = apartment;
	   		apts.appendChild(option);
		});
	}
}

populateApts();


/**
 * Function used upon pushing sign in button
 */
function signIn () {

	let aptInput = document.getElementById("apt-input").value;
	let userNameInput = document.getElementById("user-name-input").value;
	let passwordInput = document.getElementById("password-input").value;
	let leasingRepInput = document.getElementById("leasing-rep-input");

	if (!checkSignInValues (aptInput, userNameInput, passwordInput)) {
		return;
	}

	if (!verifyAccount (userNameInput, passwordInput)) {
		return;
	}

	let user = userData.find(function (user) { return user.userName === userNameInput; });

	setSessionStorage(user);

	if (user.isLeasingRep) {

		window.location.href = "office/app-turnin.html";
	
	} else {

		window.location.href = "group.html";
	}

	
}

/**
 * Checks of input values are correct
 */
function checkSignInValues (aptInput, userNameInput, passwordInput) {

	if (aptInput == "" || !apartments.includes(aptInput)) {
		alert ("Please select an apartment complex");
		return false;

	} else if (userNameInput == "") {
		alert ("Please type in your user name");
		return false;

	} else if (passwordInput == "") {
		alert ("Please type in password");
		return false;
	
	} else {

		return true;
	}
}

/**
 * Checks if the user is in the system
 */
function verifyAccount (userNameInput, passwordInput) {

	let user = getUser(userNameInput);

	if (user == null) {
		alert ("Username doesn't exist");
		return false;
	} 

	if (user.password != passwordInput) {
		alert ("Incorrect password");
		return false;
	}

	return true;
}


/**
 * Saves user information to local storage
 */
function setSessionStorage (user) {

	sessionStorage.setItem("localUserData", JSON.stringify(user));
}


/**
 * Gets specific user from data storage
 */
function getUser (userNameInput) {

	for (let i = 0; i < userData.length; i++) {
		if (userData[i].userName == userNameInput) {
			return userData[i];
		}
	}

	return null;
}

/**
 * Function used upon pushing sign in button
 */
function signUp() {

	let aptInput = document.getElementById("apt-input").value;
	let fNameInput = document.getElementById("fname-input").value;
	let lNameInput = document.getElementById("lname-input").value;
	let userNameInput = document.getElementById("user-name-input").value;
	let emailInput = document.getElementById("email-input").value;
	let passwordInput = document.getElementById("password-input").value;
	let leasingRepInput = document.getElementById("leasing-rep-input");

	let signUpValues = [fNameInput, lNameInput, userNameInput,
						emailInput, passwordInput];

	if (!checkSignUpValues (aptInput, signUpValues)) {
		return;
	}

	if (!verifyUniqueAccount (userNameInput)) {
		return;
	}

	saveAccount(aptInput, signUpValues, leasingRepInput);

	if (leasingRepInput.checked) {

		window.location.href = "office/app-turnin.html";
	
	} else {

		window.location.href = "group.html";
	}

	
}

/**
 * Checks of input values are correct
 */
function checkSignUpValues (aptInput, signInValues) {

	if (!apartments.includes(aptInput)) {
		alert ("Please select an existing apartment complex");
		return false;
	}

	for (let i = 0; i < signInValues.length; i++) {

   		if (signInValues[i] == "") {
   			alert ("Please fill out all values");
   			return false;
   		}
	}

	return true;
}

/**
 * Checks if the user is in the system
 */
function verifyUniqueAccount (userNameInput) {

	let user = getUser(userNameInput);

	if (user != null) {
		alert ("Username already exists");
		return false;
	} 

	return true;
}

/**
 * Creates account object and stores in data
 */
function saveAccount (aptInput, signInValues, leasingRepInput) {

	let newUser = {
		userName: signInValues[0],
		apt: aptInput,
		fName: signInValues[1],
		lName: signInValues[2],
		email: signInValues[3],
		password: signInValues[4],
		isLeasingRep: leasingRepInput.checked
	}

	userData.push(newUser);

	setSessionStorage(newUser);
}