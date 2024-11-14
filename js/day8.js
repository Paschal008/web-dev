// Events,events listeners
// click ,submit,scroll

// click event
// select element
let button=document.querySelector('#btn')

// add event listener
button.addEventListener("click", ()=>{
    console.log("Button clicked")
})

// submit event
let form= document.querySelector('.one')
let a =["paschal@gmail.com", "Paschal1"]
let greet= document.getElementById('greet')


form.addEventListener("submit", (event)=>{
    event.preventDefault()  
    console.log("Form Submitted");

    const username = event.target.username.value
    const email = event.target.email.value
    const password = event.target.password.value
    console.log(username);
    console.log(email);
    console.log(password);



    if (email == a[0]  && password == a[1]) {
        greet.textContent = `Welcome, ${username}`
   }else {
       greet.textContent = `Incorrect Email or Password`
   }
});


