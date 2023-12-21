var button = document.getElementById("submit");
var usname = document.getElementById("email");
var pass = document.getElementById("password");
var message = document.getElementById("error");
var ch = true
button.addEventListener("click", function(event){
    event.preventDefault();
    var acc = localStorage.getItem("allstorage")
    var allaccount = JSON.parse(acc)
    if(allaccount == null){
        message.classList.add("error")
    }
    else{
        for(i = 0; i < allaccount.length; i ++){
            chec = allaccount[i]
            if (chec.email == usname.value){
                ch = true
                if(chec.password == pass.value){
                    window.location = `../page/main.html`
                }
                else{
                    message.classList.add("error")
                }
            }
            else{
                ch = false
            }
        }
    }
    if(ch == false){
        message.classList.add("error")
    }
})