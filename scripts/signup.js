document.querySelector('.change-login').addEventListener('click', function () {
    document.querySelector('.signup').style.display = 'none';
    document.querySelector('.login').style.display = 'flex';
})

document.querySelector('.signup__cancel').addEventListener('click', function () {
    document.querySelector('.decentral').style.display = 'none';
})

var signup_email = document.querySelector('#signup-email');
var signup_password = document.querySelector('#signup-password');
var signup_confirmpw = document.querySelector('#signup-confirm-pw');
var btn_signup_sm = document.querySelector('.signup__submit')

btn_signup_sm.addEventListener('click', function () {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

})

