var barLinks = document.querySelectorAll('.bar-link')
var barTargets = document.querySelectorAll('.bar-target')

barLinks.forEach(function (menuLink) {
    menuLink.addEventListener('click', function (event) {
        event.preventDefault();

        const target = this.getAttribute('data-target');
        barLinks.forEach(function (link) {
            link.classList.remove('using');
        })

        this.classList.add('using')
        barTargets.forEach(function (menu) {
            menu.style.display = 'none'
        })

        document.getElementById(target).style.display = 'block';
    })
})