var btn_cancel = document.querySelector('.book__cancel');
var view_books = document.querySelectorAll('.view__book')
var show_book = document.querySelector('.show__book')
var form_img = document.querySelector('.form__book--img')

btn_cancel.addEventListener('click', function () {
    show_book.style.display = 'none'
})

view_books.forEach(function (view_book) {
    view_book.addEventListener('click', function () {
        const bookimg = this.getAttribute("src");
        form_img.setAttribute("src", bookimg)
        show_book.style.display = 'flex';
    })
})
