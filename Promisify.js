const util=require('util')
function download(url,downloaded){
    console.log("Downloading from "+url)
    if(!url.startsWith('http')){
        return downloaded(new Error("We only download from http servers"))
    }
    setInterval(()=>{
        let file=url.split('/').pop()
        console.log("Downloaded "+file)
        downloaded(file)
    },2000)
}

function compress(filePath,format,compressed){
    console.log("Compressing "+filePath)
    if(['zip','7z','gzip'].indexOf(format)==-1){
        return compressed(new Error("We dont compress in this format"))
    }
    setInterval(()=>{
        let archive=filePath.split('.')[0]+format
        console.log("Compressed and saved file as"+archive)
        compressed(archive)
    },2000)
}

function upload(server,file,uploaded){
    console.log("Uploading "+file+" to "+server)
    if(!server.startsWith("ftp")){
        return uploaded(new Error("We only upload to ftp servers"))
    }
    setInterval(()=>{
        let remotePath=server+"/"+file
        console.log("Uploaded to "+remotePath)
        uploaded(remotePath)
    },2000)
}

const downloadPromise=util.promisify(download)
const uploadPromise=util.promisify(upload)
const compressPromise=util.promisify(compress)

downloadPromise("http://filename.com/path/image.jpg")
    .catch((err)=>{
        console.log("Cannot download file")
    })//keeps on executinf if used such
    .then((file)=>compressPromise(file,'zip'))
    .then((archive)=>uploadPromise('ftp://files.com',archive))
    .catch((err)=>console.log(err))//stops execution if only this catch block used