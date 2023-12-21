button = document.getElementById(`submit`);
var message = document.getElementById("error");
button.addEventListener(`click`, function(event){
    event.preventDefault();
    acc = localStorage.getItem(`allstorage`)
    allacount = JSON.parse(acc)
    var usname = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    if (usname == `` % pass == ``){
        message.classList.add(`error`)
    }
    else{
        if (allacount == null) {
            allacount == [{
                email: usname,
                password: pass
            }]
        }
        else{
            allacount.push({
                email: usname,
                password: pass
            })
        }
    }
    localStorage.setItem(`allstorage`, JSON.stringify(allacount))
    window.location = `../page/main.html`
})