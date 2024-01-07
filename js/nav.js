var login = localStorage.getItem("signin");
ch = 0;
if (login == null || login == "no") {
    var up = document.getElementById("noyes");
    login = "no";
    localStorage.setItem("signin", login)
    up.innerHTML = "Đăng nhập/ Đăng ký";
}
else if (login == "yes") {
    var usname = localStorage.getItem("username")
    var up = document.getElementById("sign_in");
    up.innerHTML = "<a id='noyes'></a>" + '<a id="hah"><button id="logout">Đăng xuất</button></a>';
    var a = document.getElementById("noyes");
    a.innerHTML = "Hello, " + usname;
    ch = true
}
if (ch == true) {
    var c = document.getElementById("logout");
    c.addEventListener("click", function(e){
        e.preventDefault();
        login = "no";
        localStorage.setItem("signin", login);
        window.location.reload();
    })
}