var button = document.getElementById("submit");
var message = document.getElementById("error");
var message2 = document.getElementById("error2")
button.addEventListener("click", function(event){
    event.preventDefault();
    var usname = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    var acc = localStorage.getItem("allstorage");
    var allaccount = JSON.parse(acc);
    console.log(usname, pass);
    if(usname.trim() == "" || pass.trim() == ""){
        message.classList.add("error")
        message2.classList.remove("error")
    }
    else{
        message.classList.remove("error")
        if(allaccount == null){
            allaccount = [{
                email: usname,
                password: pass
            }]
        }
        else{
            ch = true
            for(i = 0; i < allaccount.length; i++){
                a = allaccount[i]
                if (a.email == usname) {
                    message2.classList.add("error")
                    ch = false
                }
            }
            if(ch == true){
                message2.classList.remove("error")
                allaccount.push({
                    email: usname,
                    password: pass
                })
            }
        }
        sub = JSON.stringify(allaccount)
        localStorage.setItem("allstorage", sub)
    }
})