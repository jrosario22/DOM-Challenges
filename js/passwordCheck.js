
let passwordCheck = document.getElementById("login-submit");
passwordCheck.addEventListener("click", ()=> {
    var x = document.getElementById("password").value;
    if(x != 12345678){
        alert("Password entered is incorrect");
    } else if(x == 12345678) {
        document.getElementById("header1").innerText = "Successful log in";
    }
});

passwordCheck();