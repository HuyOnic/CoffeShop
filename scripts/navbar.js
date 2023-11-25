var btn_nav = document.querySelector('.btn_nav')
var fn_nav = document.querySelector(".fn_nav")
btn_nav.addEventListener('click', function () {
    if (fn_nav.style.display === "none") {
        fn_nav.style.display = "block";
        btn_nav.style.backgroundColor = '#FFBF00';
        btn_nav.style.transform = 'rotate(0deg)'

    } else {
        fn_nav.style.display = "none";
        btn_nav.style.backgroundColor = '#D2042D';
        btn_nav.style.transform = 'rotate(90deg)'
    }
})