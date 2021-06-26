function hellosayer(times,name){
    let count=0
    let loopId=setInterval(()=>{
        count ++
        console.log("Hello"+name)
        if(count==times){
            clearInterval(hellosayer)
        }
    },100)
}

hellosayer(3,'Lakshay')
hellosayer(2,'Takshu')

module.exports={
    hellosayer
}