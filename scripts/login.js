var customer_email = "huymobile5979@gmail.com";
var customer_password = "huyhuyhuy";

var manager_email = "quanly1111@gmail.com";
var manager_password = "12345678";

var employee_email = "nhanvien1111@gmail.com";
var employee_password = "12345678";

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.match(emailRegex)) {
        showError("Email không hợp lệ");
    } else if (password.length < 6) {
        showError("Mật khẩu phải có ít nhất 6 ký tự");
    } else {
        // Thành công - tùy chỉnh hành động ở đây (chẳng hạn chuyển hướng đến trang khác)
        alert("Đăng nhập thành công!");
        // Xóa các thông báo lỗi
        clearError();
    }

    if (email === customer_email && customer_password === password) {
        window.location.href = "/views/customer.html";
    }
    else if (email === manager_email && password === manager_password) {
        window.location.href = "/views/manager.html";
    }
    else if (email === employee_email && password === employee_password) {
        window.location.href = "/views/employee.html";
    }
});

function showError(message) {
    var errorDiv = document.getElementById("error");
    errorDiv.textContent = message;
}

function clearError() {
    var errorDiv = document.getElementById("error");
    errorDiv.textContent = "";
}
document.querySelector('.cancel').addEventListener('click', function () {
    document.querySelector('.decentral').style.display = 'none';
})

document.querySelector('.change-signup').addEventListener('click', function () {
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.signup').style.display = 'flex';

})




