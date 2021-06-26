const util=require('util')
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

const downlaodCB=util.callbackify(download)
const compressCB=util.callbackify(compress)
const uploadCB=util.callbackify(upload)

downloadCB("http://somesite.com/path/image.jpg",(err,file)=>{
    if (err) throw err
    compressCB(file,"lzip",(err,archive)=>{
        if(err){
            console.warn(err)
            archive=file
        }
        uploadCB("http://Myfile.com",archive,(err)=>{
            if(err) throw err
        })
    })
})
