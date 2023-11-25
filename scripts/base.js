var show_bill = document.querySelectorAll('.show-bill');
var bill = document.querySelector('.bill');

show_bill.forEach(function (show) {
    show.addEventListener('click', function (event) {
        event.preventDefault();
        bill.style.display = 'block'
    }
    )
})

bill.addEventListener('click', function () {
    bill.style.display = 'none'
})
// SHOW BORROW
var show_borrow = document.querySelectorAll('.show-borrow');
var borrow = document.querySelector(".borrow-frame")
show_borrow.forEach(function (show) {
    show.addEventListener('click', function (event) {
        event.preventDefault();
        borrow.style.display = 'block'
    }
    )
})

borrow.addEventListener('click', function () {
    borrow.style.display = 'none'
})
