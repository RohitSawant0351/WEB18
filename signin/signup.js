// functions for signup page

document.querySelector("#form").addEventListener("submit", Signin)


var Sdata= JSON.parse(localStorage.getItem("signData")) || [];

    function Signin(){

    event.preventDefault()
    
    var obj=
    {
            email:document.querySelector("#email").value,
            password:document.querySelector("#password").value
    }
Sdata.push(obj)
// console.log(signupData)

localStorage.setItem("signData",JSON.stringify(Sdata))
window.location.href="login.html"


}




