function download(url){
    return new Promise((resolve,reject)=>{
        console.log("Downloading from "+url)
        if(!url.startsWith('http')){
            return reject(new Error("We only download from http servers"))
        }
        setInterval(()=>{
            let file=url.split('/').pop()
            console.log("Downloaded "+file)
            resolve(file)
        },3000)
     })
}

function compress(filePath,format,compressed){
    return new Promise((resolve,reject)=>{
        console.log("Compressing "+filePath)
    if(['zip','7z','gzip'].indexOf(format)==-1){
        return reject(new Error("We dont compress in this format"))
    }
    setInterval(()=>{
        let archive=filePath.split('.')[0]+format
        console.log("Compressed and saved file as"+archive)
        resolve(archive)
    },2000)
    })
}

function upload(server,file,uploaded){
    return new Promise((resolve,reject)=>{
        console.log("Uploading "+file+" to "+server)
        if(!server.startsWith("ftp")){
            return reject(new Error("We only upload to ftp servers"))
        }
        setInterval(()=>{
            let remotePath=server+"/"+file
            console.log("Uploaded to "+remotePath)
            resolve(remotePath)
        },1000)
    })
}

async function task1(){
    const file1=await download('http://filename.com/path/image.jpg')
    const archive1=await compress(file,'zip')
    upload('ftp://file.com',archive)
}

async function task2(){
    const file2=await download('http://filename.com/path/image.jpg')
    const archive2=await compress(file,'zip')
    upload('ftp://file.com',archive)
}

async function task3(){
    const file3=await download('http://filename.com/path/image.jpg')
    const archive3=await compress(file,'zip')
    upload('ftp://file.com',archive)
}

async function task(){
    cosnt completed1=task1()
    cosnt completed2=task2()
    cosnt completed3=task3()

    await completed1
    await completed2
    await completed3
}

task()