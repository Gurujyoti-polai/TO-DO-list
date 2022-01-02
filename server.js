const express = require('express')
const mongoose = require('mongoose')
const Todo = require('./models/todo')
const app = express()

mongoose.connect('mongodb://localhost/todolist',{
    useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req,res)=>{
    const todolists = await Todo.find()
    res.render('home',{ todolists: todolists })
})

app.post('/addtask', async (req,res)=>{
    await Todo.create({ 
        description: req.body.description,
        category: req.body.category,
        date: req.body.birthday
    })
    res.redirect('/')
})
app.listen(process.env.PORT || 5000)