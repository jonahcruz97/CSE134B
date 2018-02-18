/* Hardcoded values */


/* Data that the todo list depends on, This is hardcoded and 
 will refresh everytime the page is loaded. So when you change
 on of these values,  the change wont reflect in the next page
 for now, which will be ok for this PA. After a task is submitted, 
 have the submit button change the associated task's submitted 
 value to true, that should change the 
 */
let todoListRenter = [
	{
		taskId: 0,
		taskName: "Create Group",
		url: "group.html",
		submitted: true,
		approved: true
	},
	{
		taskId: 1,
		taskName: "Choose Apartment",
		url: "choose-apt.html",
		submitted: true,
		approved: true
	},
	{
		taskId: 2,
		taskName: "Turn in Application",
		url: "app-turnin.html",
		submitted: false,
		approved: false
	},
	{
		taskId: 3,
		taskName: "Make Deposit",
		url: "deposit.html",
		submitted: false,
		approved: false
	},
	{
		taskId: 4,
		taskName: "Set Up Utilities",
		url: "utilities.html",
		submitted: false,
		approved: false
	},
	{
		taskId: 5,
		taskName: "Get Renters Insurance",
		url: "rent-insur.html",
		submitted: false,
		approved: false
	},
	{
		taskId: 6,
		taskName: "Turn in Identity Documents",
		url: "id-turnin.html",
		submitted: false,
		approved: false
	},
	{
		taskId: 7,
		taskName: "Sign Lease",
		url: "sign-lease.html",
		submitted: false,
		approved: false
	}
]

let todoListOffice = [
	{
		taskId: 0,
		taskName: "Approve Apartment Application",
		url: "app-turnin.html",
		submitted: true,
		approved: true
	},
	{
		taskId: 1,
		taskName: "Approve Deposit",
		url: "deposit.html",
		submitted: false,
		approved: false
	},
	{
		taskId: 2,
		taskName: "Approve Utilities",
		url: "utilities.html",
		submitted: false,
		approved: false
	}
]

sessionStorage.setItem("todoListRenter", JSON.stringify(todoListRenter));


//let todoList = makeProfileArray(JSON.parse(sessionStorage.getItem("localUserData")));
//let checkList = document.getElementById('check-list');

/**
 * Populates the todo list
 */
function populateTodoList () {

	let todoList = (document.body.className.match('renterClass')) ?
		todoListRenter : todoListOffice;

	let checkList = document.getElementById('check-list');
	checkList.innerHTML ='';

	makeUL(todoList, checkList);
}

populateTodoList();


/**
 * Creates todo list in html
 */
function makeUL(array, list) {

    //var array = makeProfileArray(JSON.parse(sessionStorage.getItem("localUserData")));

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        if (array[i].submitted) {
        	item.className = "done";
        }

        var aItem = document.createElement('a');

        aItem.href = array[i].url;

        aItem.appendChild(document.createTextNode(array[i].taskName));

        // Set its contents:
        item.appendChild(aItem);

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}


/**
 * Gets todo task from data list
 */
function getTask (taskIdInput, todoList) {

	for (let i = 0; i < todoList.length; i++) {
		if (todoList[i].taskid == taskIdInput) {
			return todoList[i];
		}
	}

	return null;
}


function submitLease () {
	//when lease is submitted, change submitted to be true
	// TODO: figure out how to make this data persistent
	// todo-script is being re-run so all the data I store to session storage is lost continuously
	// we need to redesign how we handle javascript so we aren't constantly running scripts.
	todoListRenter = JSON.parse(sessionStorage.getItem("todoListRenter"));
	todoListRenter[7].submitted = true;
	todoListRenter[7].approved = true;	
	populateTodoList();
}

function submitRenters () {
	//when lease is submitted, change submitted to be true
	todoListRenter[5].submitted = true;
	todoListRenter[5].approved = true;
	populateTodoList();
}
