const express = require('express')

const app= express() 

app.use(express.urlencoded({extended:true}))

let tasks=['']

app.get('/',(req,res)=>{
    let tasklist=tasks.map(t=> <li>${t}</li>.join</n>) //data is stored as long as server is running
    res.send(`
    <html>
    <body>
       <form action="/" method="POST">
            <input name="newtask">
            <button type="submit">ADD</button>
        </form>
        <ul>
            ${tasklist}
        </ul>
    </body>
    </html>            
    `)
})

app.post('/',(req,res)=>{
    tasks.push(req.body.newtask)
    res.redirect('/')//redirects to the html 
})

app.listen(5555,()=>{ 
    console.log('Server Started on http://localhost:4444')
})