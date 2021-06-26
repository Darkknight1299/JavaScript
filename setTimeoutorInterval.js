//set time out
function sayhello(){
    console.log("Hello!");
}
console.log("The wait starts...")
setTimeout(sayhello,1000)

//set interval
let runcount=0;
let a;
function sayhello(){
    runcount++;
    if(runcount>5){
        clearInterval(a);
    }
    console.log("Hello!");
}
a=setInterval(sayhello,1000);