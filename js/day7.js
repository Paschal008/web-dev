let date= new Date()

console.log(date);

console.log(
    date.getFullYear()
);
 console.log(
    date.getMonth()
 );
 console.log(
    date.getDate()
 );

 console.log(
    date.getDay()
 );

console.log(
    date.getMilliseconds()
);

// Timestamp,jan 1 1970
 let timestamp= date.getTime()
console.log(timestamp);

let date2= new Date(1730297518370)
console.log(date2);

// timeout,intervals

// setTimeout(()=>{
//     console.log("Set Timeout");    
// },4000)

// const interval1= setInterval(()=>{
//     console.log("Interval")
// },4000)

// setTimeout(()=>{
//     clearInterval(interval1)
//     console.log("Interval cleared");
    
// },10000)

let date3= new Date()
setTimeout(()=>{
    console.log(date3);   
},5000)

       
