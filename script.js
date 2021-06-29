const form = document.querySelector('.blue-and-card form');
const inputs = document.querySelectorAll('.blue-and-card form input');

form.addEventListener('submit', (e) => {
e.preventDefault();
inputs.forEach((input)=> {
    console.log(input.value);
    if(!input.value){
        input.parentElement.classList.add('error');
    }else{
        input.parentElement.classList.remove('error'); 
    }
});
});