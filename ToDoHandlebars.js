const express = require('express')

const app= express() 

app.use(express.urlencoded({extended:true}))

app.set('view engine','hbs')//specify template language

let tasks=['']

app.get('/',(req,res)=>{
    res.render('home',{
        title:'Task Manager'
        tasks
    })
})

app.post('/',(req,res)=>{
    tasks.push(req.body.newtask)
    res.redirect('/')//redirects to the html 
})

app.listen(5555,()=>{ 
    console.log('Server Started on http://localhost:4444')
})