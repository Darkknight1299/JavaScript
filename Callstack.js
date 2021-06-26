function ab(){
    console.log("a")
    bc();
}

function bc(){
    console.log("b")
    xy();
}

function xy(){
    console.log("c");
}

ab();