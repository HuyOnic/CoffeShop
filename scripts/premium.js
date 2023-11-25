// Extend Time
var page1 = document.querySelector('.employee__confirm--premium1');
var page2 = document.querySelector('.employee__confirm--premium2');
var page3 = document.querySelector('.employee__confirm--premium3');

var next1 = document.querySelector('.pre_page1');
var next2 = document.querySelector('.pre_page2');
var next3 = document.querySelector('.pre_page3');

next1.addEventListener('click', function (event) {
    event.preventDefault();
    page1.style.display = 'none';
    page2.style.display = 'flex';
})

next2.addEventListener('click', function (event) {
    event.preventDefault();
    page2.style.display = 'none';
    page3.style.display = 'flex';
})

// Signup
var page_singup1 = document.querySelector('.employee__signup--premium1');
var page_singup2 = document.querySelector('.employee__signup--premium2');
var page_singup3 = document.querySelector('.employee__signup--premium3');

var next_signup1 = document.querySelector('.pre_page-signup1');
var next_signup2 = document.querySelector('.pre_page-signup2');
var next_signup3 = document.querySelector('.pre_page-signup3');

next_signup1.addEventListener('click', function (event) {
    event.preventDefault();
    page_singup1.style.display = 'none';
    page_singup2.style.display = 'flex';
})

next_signup2.addEventListener('click', function (event) {
    event.preventDefault();
    page_singup2.style.display = 'none';
    page_singup3.style.display = 'flex';
})

