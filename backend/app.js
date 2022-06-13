const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const todoList = []

app.post('/todolist', (req, res) => {
    console.log(req.body)
    const title = req.body.title
    const priority = req.body.priority
    const date = req.body.date
    todoList.push({title: title, priority: priority, date: date})
    res.json({success: true, description: `new todo item of title: ${title} created`})

})

app.post('/todolist/update', (req, res) => {
    console.log(req.body)
    const title = req.body.title
    const newPriority = req.body.priority
    const newDate = req.body.date
    for (let index = 0; index < todoList.length; index++) {
        const element = todoList[index];
        if(element.title == title)
        {
            todoList[index].priority = newPriority
            todoList[index].date = newDate
        }
    }
    res.json({success: true, description: `todo item successfully updated!`})

})

app.get('/todolist', (req, res) => {
    res.json(todoList)
})

app.listen(8100, () => {
    console.log('hello world!')
})