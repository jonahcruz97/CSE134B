/* Hardcoded values */


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myProfile");

var logoutBtn = document.getElementById("logoutBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


var options;


/**
 * Populates apartment title
 */
function populateAptTitle() {

	let userData = JSON.parse(sessionStorage.getItem("localUserData"));

	// While there is no server set up
	if (userData == null) {
		userData = getUser(currentUser);
	}

	document.getElementById("aptTitle").textContent = userData.apt;
}

populateAptTitle();


function makeUL(userData) {
    // Create the list element:
    var list = document.getElementById('profile-list');

    var array = makeProfileArray(JSON.parse(sessionStorage.getItem("localUserData")));

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

function makeProfileArray(userData) {
	var array = [];

	// While there is no server set up
	if (userData == null) {
		userData = getUser(currentUser);
	}

	array.push("Username: " + userData.userName);
	array.push("Apartment: " + userData.apt);
	array.push("First Name: " + userData.fName);
	array.push("Last Name: " + userData.lName);
	array.push("Email: " + userData.email);

	return array;
}

// Add the contents of options[0] to #foo:
//document.getElementById('modal-content').appendChild(makeUL(getUser(currentUser)));
makeUL(getUser(currentUser));

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

logoutBtn.onclick = function() {

	let userData = JSON.parse(sessionStorage.getItem("localUserData"));

	// While there is no server set up
	if (userData == null) {
		userData = getUser(currentUser);
	}

	let isLeasingRep = userData.isLeasingRep;

	sessionStorage.setItem("localUserData", null);

	if (isLeasingRep) {
		window.location.href = "../../index.html";
	} else {
		window.location.href = "../index.html";
	}
	
}

