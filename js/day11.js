let book = { 
    color:"red",
    pages: "54",
    type: "textbook"
}

let person = {
    name :"paschal",
    complexion:"dark",
    age: "22"
}

let car = {
    color: "red",
    engine: "v8",
    brand: "benz",
    size: "50"
}
// destructuring of object
const {color,engine} = car
console.log(car.brand)
console.log(color)
console.log(engine);

let a =[12,null,{name:"Johnwick", dog:true, age:30},"hello"]

const {name,dog,age}= a[2]
console.log(name);

// destructuring of array
const x= [12,{name:"John",age:30},"hello"]
const [b, ,z]= x
console.log(b,z);

// spread operator
let c = [1,2,3,4,5]
let y =[...x,...c]
console.log(y);

// export & import by name
export const num = 13


// export & import by default function
const greet = "hello again"
export default greet



