var menu_option = document.querySelector(".menu-option");
var book_option = document.querySelector(".book-option");

var menu = document.querySelector(".container")
var book = document.querySelector(".book")
menu_option.addEventListener('click', function () {
    menu_option.classList.add('select');
    menu.style.display = 'block';
    book_option.classList.remove('select')
    book.style.display = 'none';
})

book_option.addEventListener('click', function () {
    book_option.classList.add('select');
    book.style.display = 'block';
    menu_option.classList.remove('select')
    menu.style.display = 'none';
})
