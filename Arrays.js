let arr=[1,2,3]
console.log(arr)
let arr2=[1,'hello',2,arr]
for(i=0;i<arr2.length;i++){
    console.log(arr2[i])
}
for(let val of arr2){
    console.log(val)
}
for(let index in arr2){
    console.log(arr2[index])
}

let fruits=['apple','mango']
fruits.push('melon')
fruits.pop()
console.log(fruits)

fruits.shift()
fruits.unshift('Kiwi','banana')
console.log(fruits)

let notes=['do','re','mi','fa','so','la','ti','do']//musical notes
console.log(notes.slice(4,6))
let omit=notes.splice(2,6)
console.log(omit)
notes.splice(0,3,'sa','re','ga')
console.log(notes)
console.log(notes.concat(['sa','re','ga']))
console.log(notes)
