
let passwordCheck = document.getElementById("form");
passwordCheck.addEventListener("submit", function(event){
    passwordCheckFunc();
    event.preventDefault();
});

function passwordCheckFunc() { 
        var x = document.getElementById("password").value;
        if(x != 12345678){
            alert("Password entered is incorrect");
        } else if(x == 12345678) {
            document.getElementById("header1").innerText = "Successful log in";
        }
}


