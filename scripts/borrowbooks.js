var borrow_next1 = document.querySelector('.employee__borrow--next1');
var borrow_form1 = document.querySelector('.employee__borrow1');

var borrow_next2 = document.querySelector('.employee__borrow--next2');
var borrow_form2 = document.querySelector('.employee__borrow2');
borrow_next1.addEventListener('click', function (event) {
    event.preventDefault();
    borrow_form1.style.display = 'none';
    borrow_form2.style.display = 'flex';
})