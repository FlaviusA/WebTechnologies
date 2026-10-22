let loginForm= document.getElementById("loginForm");
let emailInput=document.getElementById("email");
let passwordInput=document.getElementById("password");
loginForm.addEventListener("submit",function(e){
    e.preventDefault();
    const email=emailInput.value.trim();
    const password=passwordInput.value;
    const emailRegex = /^[a-z]+\.[a-z]+[0-9]{2}@e-uvt\.ro$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;
    if(!emailRegex.test(email)){
        alert("The email doesnt match the pattern");
        return;
    } 
    if(!passwordRegex.test(password)){
        alert("the password doesnt match the pattern");
        return;
    }
    alert("Login reusit");



});