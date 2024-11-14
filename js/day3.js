// arrays

let x = 12
console.log(x);

let a = [12, 32, "hello", true, null]
console.log(a);

console.log(
    a[3]
);

console.log(
    a.push(3001),a
);

console.log(
    a.pop(), a
);

console.log(
    a.unshift(), a
);

console.log(
    a.includes("hello")
);

// object

let car = {
    color: "red",
    engine: "ve",
    brand: "benz",
    size: 50
}

console.log(car);

console.log(car.brand)

// function

function greet (){
    console.log("hello world!");  
}

greet()
// arrow / callback
let greet2 = () =>{
    console.log("Hello world2");
}

greet2()                      

// parameters and arguments

let greeting = (user) =>{
    console.log("Hello" + user);
}

greeting(" wick")

 let greetings = (user)=>{
    console.log(`welcome ${user}`); 
 }
 let i = prompt("enter your name")
 greetings(i)

    


