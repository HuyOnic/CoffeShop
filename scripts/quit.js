// QUIT
var quits = document.querySelectorAll('.btn--delete');

quits.forEach(function (quit) {
    quit.addEventListener('click', function (event) {
        event.preventDefault();
        const parent = this.parentNode
        parent.style.display = 'none'
        alert('Xóa thành công!')
    })
})