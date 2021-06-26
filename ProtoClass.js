let a ={'p':10,'q':'Lakshay', 'r':true}
let b= Object.create(a)
let c=Object.create(b)
console.log(b._proto_==a)
let d=a.isPrototypeOf(b);
console.log(d)