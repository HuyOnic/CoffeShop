var details = document.querySelectorAll('.report-detail')
var report = document.querySelector('.report')
details.forEach(function (detail) {
    detail.addEventListener('click', function (event) {
        event.preventDefault();
        report.style.display = 'flex';
    })
})

report.addEventListener('click', function () {
    report.style.display = 'none';
})
