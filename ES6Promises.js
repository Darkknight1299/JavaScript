function fakedownload(correct){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let downloadedData="Some data from the net"
            console.log("Downloaded is completed")
            if(correct){
                resolve(downloadedData)
            }
            else{
                reject(new Error("Could not download file"))
            }
        },1000)
    })
}

let download=fakedownload(true);
download.catch(function err(){
    console.log(err)
})
 setTimeout(function(){
    download.then(function(data){
        console.log("The data to be downloaded->")
        console.log(data);
    })
 },3000)