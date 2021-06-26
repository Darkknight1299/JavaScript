function hellosayer(times,name){
return new Promise((resolve,reject)=>{
    let count=0
    let loopId=setInterval(()=>{
        count ++
        console.log("Hello"+name)
        if(count==times){
            clearInterval(hellosayer)
        }},100)
    })
}

//Concurrency
hellosayer(3,'Lakshay')
hellosayer(2,'Takshu')
hellosayer(3,'Ayush')

//Sequencial
hellosayer(3,'Lakshay')
    .then(()=>hellosayer(2,'Takshu'))
    .then(()=>hellosayer(3,'Ayush'))