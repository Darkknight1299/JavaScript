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
    
  async function task (){
      await hellosayer(3,'Lakshay')
      await hellosayer(2,'Takshu')
      await hellosayer(3,'Ayush')
  }

  task()
  