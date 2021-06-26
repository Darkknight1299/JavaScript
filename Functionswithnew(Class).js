function person(name,age){
    this.name=name;
    this.age=age;
}

let p=new person("Harry Potter",20)
console.log('p= '+JSON.stringify(p))//converts into string