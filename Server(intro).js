const express = require('express')

const app= express() //as server is type of application hence app, and word can be used as variable

app.use(express.urlencoded({extended:true}))//Now post query can be used

app.get('/', (req,res) =>{
    res.send('<h1 style="color:red;">Hello World</h1>')
})

app.get('/greet', (req,res) =>{
    let person='Guest'
    if(req.query.person)
        person=req.query.person
    res.send('Good Morning '+person)    
})

app.post('/greet', (req,res) =>{
    let person='Guest'
    if(req.body.person)
        person=req.body.person
    res.send('Good Evening '+person)    
})

app.get('/:city/:greetings',(req,res) => { //: this makes the variable non static....what ever we write in request will be used and output will be given
    res.send(req.params.greetings + ' to ' + req.params.city + '!')
})

app.get('/Form',(req,res)=>{
    res.sendFile(__dirname+'\\Form.html')
})

app.listen(4444,()=>{ //Any Port can be used above 1024
    console.log('Server Started on http://localhost:4444')
})