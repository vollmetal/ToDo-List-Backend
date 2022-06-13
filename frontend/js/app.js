const taskNameInput = document.getElementById('taskNameInput')
const taskPriorityInput = document.getElementById('taskPriorityInput')
const taskDateInput = document.getElementById('taskDateInput')
const addTaskButton = document.getElementById('addTaskButton')
const taskDisplay = document.getElementById('taskDisplay')


function createNewTask () {
    makeNewTask(taskNameInput.value, taskPriorityInput.value, taskDateInput.value)
    getServerData()
}

function displayTasks (tasks) {
    let taskElements = tasks.map ((task) => {
        return `<div class="taskItem">
        <p>${task.title}</p>
        <p>${task.priority}</p>
        <p>${task.date}</p>
    </div>`
    })
    taskDisplay.innerHTML = taskElements.join('')
}

function getServerData () {
    fetch('http://localhost:8100/todolist')
    .then((res) => res.json())
    .then((tasks) => {
        displayTasks(tasks)
    })
}

function makeNewTask (name, priority, date) {
    fetch('http://localhost:8100/todolist', {method: 'POST', headers: {
        'Content-Type': 'application/json'
    }, body: JSON.stringify({

        title: name,
       
       priority: priority,
       
       date: date
       
       })})
       .then((response) => response.json())
       .then((result) => {
        console.log(result)
       })
}

getServerData()