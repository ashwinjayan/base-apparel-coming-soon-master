const formBtn = document.querySelector('.form>button');
const formInp = document.querySelector('.form>input');
const error = document.querySelector('.error');

function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(emailField.value);
}

formBtn.addEventListener('click', function () {
    if(!validateEmail(formInp)) {
        error.classList.replace('hidden', 'flex-display');
    } else {
        error.classList.replace('flex-display','hidden');
    }
});

