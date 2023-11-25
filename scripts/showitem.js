var btn_cancel = document.querySelector('.form__cancel');
var view_items = document.querySelectorAll('.view__item')
var show_item = document.querySelector('.show__item')
var item_img = document.querySelector('.form__item--img')

btn_cancel.addEventListener('click', function () {
    show_item.style.display = 'none'
})

view_items.forEach(function (view_item) {
    view_item.addEventListener('click', function () {
        const menuimg = this.getAttribute("src");
        console.log(menuimg)
        item_img.setAttribute("src", menuimg)
        console.log(item_img)
        show_item.style.display = 'flex';
    })
})
