function download(url,downloaded){
    console.log("Downloading from "+url)
    setInterval(()=>{
        let file=url.split('/').pop()
        console.log("Downloaded "+file)
        downloaded(file)
    },2000)
}

function compress(filePath,format,compressed){
    console.log("Compressing "+filePath)
    setInterval(()=>{
        let archive=filePath.split('.')[0]+"."+format
        console.log("Compressed and saved file as"+archive)
        compressed(archive)
    },2000)
}

function upload(server,file,uploaded){
    console.log("Uploading "+file+" to "+server)
    setInterval(()=>{
        let remotePath=server+"/"+file
        console.log("Uploaded to "+remotePath)
        uploaded(remotePath)
    },2000)
}

download("http://somesite.com/path/image.jpg",(file)=>{
    compress(file,"zip",(archive)=>{
        upload("http://Myfile.com",archive,()=>{})
    })
})
