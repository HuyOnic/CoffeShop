var buy = document.querySelector('#pay')
var select = document.querySelector('#payment')
var show_payment = document.querySelector(".show__payment")
buy.addEventListener('click', function () {
    if (select.value === "Thanh toán chuyển khoản") {
        show_payment.style.display = "flex";
    }
    else {
        window.location.href = "/views/order.html";
    }
})

var confirm_bay = document.querySelector('#confirm-pay')
var reject_bay = document.querySelector('#reject-pay')

reject_bay.addEventListener('click', function () {
    document.querySelector(".show__payment").style.display = "none";
})

confirm_bay.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "/views/order.html";
    show_payment.style.display = "none";

})
