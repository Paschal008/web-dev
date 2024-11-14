// Switch
// let day= "Sunday" 

//  switch (day){
//  case "Monday":
//      console.log(1);
//      break;
//  case "Tuesday":
//      console.log(2);
//  default:
//      // console(7);

// }

// loops
// for loop
// initialization,condition,increment or decrement
// 1,true
// 5,true
// 6,false

// for(let i=1; i<=5; i++){
//     console.log(i);
// }

// while loop

let j=1 
while (j <= 5){
    console.log("hello");
    j++ 
}

// forEach loop
let numbers = [1,2,3,4,5]

// numbers.forEach((num,index,array)=>{
//     console.log(num*2, index,array);
// })

let fruit=["mango","apple","watermelon","grape"]

fruit.forEach((a)=>{
    console.log(a.toUpperCase());
})

let num= [1,2,3,4,5]
let sum=0

num.forEach((num)=>{
    let square = 0
    square= num**2
    sum+=square
    console.log(`The square of ${num} is ${square}`)
})
console.log(`The sum of squares is ${sum}`);

let n=5
let fact=1
for(let i=1; i<=n; i++){
    fact = fact * i
}
console.log(`factorial of ${n} is ${fact}`)
