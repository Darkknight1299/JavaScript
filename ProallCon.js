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
      await Promise.all([hellosayer(3,'Lakshay'),
      await hellosayer(2,'Takshu'),
      await hellosayer(3,'Ayush')])
    
    console.log("First bAtch over")

    
    await Promise.all([hellosayer(3,'Lak'),
    await hellosayer(2,'Tak'),
    await hellosayer(3,'Ayu')])

    }



  task()
  