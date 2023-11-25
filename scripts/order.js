var menuLinks = document.querySelectorAll('.menu-link')
var menuTargets = document.querySelectorAll('.menu-target')
var showAll = document.querySelector('.all-order')
menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener('click', function (event) {
        event.preventDefault();

        const target = this.getAttribute('data-target');
        menuLinks.forEach(function (link) {
            link.classList.remove('active');
        })

        this.classList.add('active')
        menuTargets.forEach(function (menu) {
            menu.style.display = 'none'
        })

        document.getElementById(target).style.display = 'block'
    })
})

showAll.addEventListener('click', function () {
    menuTargets.forEach(function (menu) {
        menu.style.display = 'block';
    })
})