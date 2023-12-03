var viewPremium = document.querySelectorAll('.view-premium');
var showPremium = document.querySelector('.intro__premium--frame');

viewPremium.forEach(function (vp) {
    vp.addEventListener('click', function () {
        showPremium.style.display = 'flex';
    })
})

showPremium.addEventListener('click', function () {
    showPremium.style.display = 'none';
})
