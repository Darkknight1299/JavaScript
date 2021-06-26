function person(name,age){
    this.name=name;
    this.age=age;
    this.isAdult=function () {return this.age>=18}
}

person.prototype.isTeen=function (){return this.age<=19}

let p=new person("Harry Potter",20)
let p2=new person("Lakshay Rana",16)
console.log(p.isAdult())
console.log(p2.isAdult())
console.log(p.isAdult==p2.isAdult)
console.log(p.isTeen())
console.log(p2.isTeen())
console.log(p.isTeen==p2.isTeen)