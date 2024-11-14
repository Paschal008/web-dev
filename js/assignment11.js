
const button = document.getElementById('switchBtn');
let light = false;

button.addEventListener('click', () => {
    light = !light;
    document.querySelector('i').classList.toggle('light-on', light);
    button.textContent = light ? ' Off' : ' On';
});
