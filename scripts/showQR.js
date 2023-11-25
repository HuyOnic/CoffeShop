var qrPay = document.querySelector('#qr-pay');
var showQR = document.querySelector('.show__payment')
qrPay.addEventListener('click', function () {
    showQR.style.display = 'flex';
})
showQR.addEventListener('click', function () {
    showQR.style.display = 'none';
})