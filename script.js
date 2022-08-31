const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const submitButt = document.querySelector('button');
const treatForm = document.querySelector('form');
function checkPass(){
    if (password1.value !== password2.value){
        password2.setCustomValidity("Passwords do not match");
        console.log(password2.value);
    }else {
        password2.classList.add('valid');
        password2.setCustomValidity("Passwords match!");
        password2.setCustomValidity("");
    }
}

function subForm(){
    treatForm.classList.add('submitted');
    checkPass();
};

// submitButt.addEventListener('click', subForm)
password2.addEventListener('change', checkPass);