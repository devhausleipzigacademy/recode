// -------- JAVASCRIPT TO TYPESCRIPT -------- //

// You want to keep track of your tasks
// but using Javascript could create potential issues
// TASK: Convert the code to Typescript to fix those issues

// TASK 1

// You have a function to create a new task
// fix the issues by converting it to Typescript-code 
// Hint: Create an interface for Tasks

// Function to create a new task
function createTask(name, dueDate) {
    return {
      name: name,
      dueDate: dueDate,
      completed: false
    };
}
  
const task1 = createTask("Buy groceries", "2024-05-20");
const task2 = createTask("Call Bob", null); // Potential issue with null dueDate

console.log(task1); // { name: 'Buy groceries', dueDate: '2024-05-20', completed: false }
console.log(task2); // { name: 'Call Bob', dueDate: null, completed: false }
  

// TASK 2

// You have a function to mark a task as complete
// fix the issues by converting it to Typescript-code

// Function to complete a task
function completeTask(task) {
    task.completed = true;
}
  
completeTask(task1);
console.log(task1); // { name: 'Buy groceries', dueDate: '2024-05-20', completed: true }

completeTask("This is not a task object"); // No error, but incorrect usage
  
// TASK 3

// You have a function to display info about a task
// fix the issues by converting it to Typescript-code

// Function to display tasks
function displayTasks(tasks) {
    tasks.forEach(task => {
      console.log(`${task.name} - Due: ${task.dueDate} - Completed: ${task.completed}`);
    });
}
  
const tasks = [task1, task2, "Not a task"];
displayTasks(tasks); // Will cause issues because of the incorrect element in the array
  