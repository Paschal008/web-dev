// ADVANCED ARRAY METHODS

// map = forEach

// forEach
let numbers = [1,2,3,4,5]


numbers.forEach((x,y,z)=>{
    console.log(x);    
     document.write(x);
    })


// types of mapping
numbers.map((num)=>{
    return (console.log(num))
})

// numbers.map(num=> console.log(num))

// numbers.map((num)=> console.log(num))

// Filters

let oddNumbers = numbers.filter(x => x % 2 !==0)
console.log(oddNumbers);

// Find

let evenNumber = numbers.find(x => x % 2 === 0)
console.log(evenNumber);

// sort
// let words = ["apple", "mango", "orange"]
// let sortedWords = words.sort()
// console.log(sortedWords);

let words =[ 32,78,12]
let sortedWords = words.sort(
    (a,b) => b-a 
     // descending order while ascending order= a-b             
)

console.log(sortedWords)

let newArray = [2,5,3,1,4]
let result = newArray.map(x => x*x).filter(x => x <= 10).sort((a,b) => a-b)

console.log(result)





