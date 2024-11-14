// operators in js

// assignment 
let x = 2
// console.log(x);
x = 25
console.log(x);

let y = 7

// y = y + 1

// y-- 
y %= 2
console.log(y);

// comparison
let a = 4
let b = 4
// 4 == 5

console.log(
    // a === b
    // a <= b
    a !== b
);

// logical 
// AND &&, OR ||

// AND 
// let c = true
// let d = false

let c = 5 > 3
let d = 4 === '4'
console.log(
    c && d
);

// OR

let e = true 
let f = false

console.log(
    e || f
);

// tenary or conditional

let age = 12
console.log(
    age >= 18 ? "you can vote" : "nope, you cannot vote"
);

// string methods

// concatenation 
let h = "john"
let i = " Doe"
console.log(
    h + i
);

// length 
let j = "earlycode"
let k = "computer"
console.log(j.length);

console.log(
    j.toUpperCase()
);

console.log(
    k.toLowerCase()
);

// slice 
// indexing

console.log(
    j.slice(0,5)
);

//  math module
// abs
let l = 20
 console.log(
    Math.abs(l)
 );
 
//  round
console.log(
    // 3.742:
    // Math.round(3.942)
    // Math.ceil(7.142)
    // Math.floor(7.742)
    Math.random()
);

let m = Math.random()* 100000
console.log(
    Math.floor(m)
);

    



