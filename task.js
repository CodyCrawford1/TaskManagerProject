const tasks = [`Charge MacBook`, `Master JavaScript`]

let newTasks;








while (true) {
    answer = prompt (`Task Manager


What would you like to do (please enter one of the options below
"Tasks" - Display All Tasks
"New" - Add a new task
"Remove" - Remove A Task
"Close" - Close The Task Manager
`)
if (answer ===`Tasks`){
    alert (tasks)
} else if (answer === `New`) {
    newTasks = prompt(`What new task do you want?`)
    tasks.push(newTasks)
} else if (answer === `Remove`) {
    remove = prompt(`Please enter a number to remove: 
    ${tasks}`)
    remove = parseInt(remove)

    while (!remove) {
        remove = prompt(`Please enter a number to remove: 
        ${tasks}`)
        remove = parseInt(remove)
    };
    remove -= 1;
    tasks.splice(remove, 1)

} else if (answer === `Close`) {
    alert (`Thanks for using task manager`)
    break;
}
}

