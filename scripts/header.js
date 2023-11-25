decentral = document.querySelector('.decentral')
document.querySelector('.service__login').addEventListener('click', function () {
    decentral.style.display = 'flex';
    document.querySelector('.login').style.display = 'flex';
    document.querySelector('.signup').style.display = 'none';

})

document.querySelector('.service__signup').addEventListener('click', function () {
    decentral.style.display = 'flex';
    document.querySelector('.signup').style.display = 'flex';
    document.querySelector('.login').style.display = 'none';
})