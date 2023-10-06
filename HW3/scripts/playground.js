// Part 2
const countDisplay = document.getElementById("count-display");
const subtractButton = document.getElementById("subtract")
const addButton = /* YOUR CODE HERE */



// Part 3a:

let count = 0;

function increaseCount() {
  /*Increment the count variable by 1.*/
  /* YOUR CODE HERE */
  countDisplay.textContent = count;
}


// Part 3b:

/* Fill in the appropriate arguments for the addEventListener function. Reference the link in the spec for help! */
addButton.addEventListener(/* YOUR CODE HERE */, /* YOUR CODE HERE */);



// Part 3c:

// Write subtractButton's event listener
/* YOUR CODE HERE */




// Part 5:

const inputTask = document.getElementById("input-task");
const taskList = document.getElementById("tasks");
// Initialize the const submitButton:
/* YOUR CODE HERE */
// Initialize the const clearButton:
/* YOUR CODE HERE */




// Part 6:
submitButton.addEventListener("click", () => {
  if (inputTask.value != "") {
      // Initialize a const variable named "task", and set it equal to a new li element. 
      /* YOUR CODE HERE */
      task.textContent = inputTask.value; // Here you set the li element you just created to have the text value in the input field!
      // Add this task to the end of taskList (this is the list you initialized earlier!).
      taskList./* YOUR CODE HERE*/
      inputTask.value = "";
  }
});

clearButton.addEventListener("click", () => {
  taskList.replaceChildren();
  inputTask.value = "";
});

taskName.addEventListener("input", () => {
  if (inputTask.value == "Cal Hacks") {
    countDisplay.style.color = "steelblue";
  }
});
