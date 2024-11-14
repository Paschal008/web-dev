// DOM- Document Object Model

document.write("Welcome")
console.log(
    document.getElementsByTagName('h1')
);
             // OR
// let x=document.getElementsByTagName('h1')
// console.log(x)

console.log(
    document.getElementsByClassName('two')
)

console.log(
    document.getElementById('one')
)

let y=document.querySelector(".three")
console.log(y)

let z=document.querySelector('h1')
z.classList.add('box')
console.log(z)
z.classList.toggle('box')


let x = document.getElementsByClassName('three')
console.log(x);
console.log(
    x[0].innerText
);

let p = document.querySelector('.four')
p.textContent = "updated text"
p.innerHTML = `<span>Hello Again</span>`
console.log(p)

// Date Constructor
console.log(
    new Date().getMonth()   
);

p.innerHTML= new Date


// assignment
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
console.log(monthNames[new Date().getMonth()]);