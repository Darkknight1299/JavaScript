function download(url){
    if (!url.startsWith("http")){
        reject(new Error("Url doesnot start with http"))
    }
    else{
        console.log("Start Download:"+url)
        setTimeout(function(){//fake 3 sec download task
            let fileName=url.split("/").pop()
            resolve(fileName)
        },3000)
    }
}

function resize(fileName){
    return new Promise(function(resolve,reject){
        if (!fileName.endsWith(".png")){
            reject(new Error("File is not png"))
        }
        else{
            setTimeout(function(){//fake 3 sec resize task
                //change x.png => x.resized.png
                let resizedFile=fileName.split(".")[0]+".resized.png"
                resolve(resizedFile)
            },3000)
        }
    })
}

function upload(resizedFile){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let uploadedUrl="http://imgur.com/"+resizedFile
            resolve(uploadedUrl)
        },3000)
    })
}

Promise.all([
    download('http://cb.lk/logo.png')
    download('http://cb.lk/banner.png')
    download('http://cb.lk/promo.png')  
]).then(function(downlaodValues){
    return Promise.all(downlaodValues.map(resize))
}).then(function(resizeValues){
    return Promise.all(resizeValues.map(upload))
}).then(function (uploadValues){
    console.log(uploadValues)
}).catch(function(err){
    console.log(err)
})