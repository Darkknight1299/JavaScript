function att(intval,deltaval){
    return{
         up(){/*already understood that its a function*/
            intval+=deltaval;
            console.log(intval)
        },
         down(){
            intval-=deltaval;
            console.log(intval)
        }
    }
}

let c = att(10,2);
c.up();
c.up();
c.down();