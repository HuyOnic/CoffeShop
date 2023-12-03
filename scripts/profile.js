var show_profile = document.querySelector(".view-profile");
var view_profile = document.querySelector(".profile")
var exit_profile = document.querySelector(".profile-exit")
show_profile.addEventListener('click', function () {
    view_profile.style.display = "flex"
})

exit_profile.addEventListener('click', function (event) {
    event.preventDefault();
    view_profile.style.display = "none"
})