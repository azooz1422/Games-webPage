//register methods:
const name = document.getElementById("t1");
let nameerr = document.getElementById("NameErr");
const phone = document.getElementById("ph1");
let phoneerr = document.getElementById("PhoneErr");
const email = document.getElementById("e1");
let emailerr = document.getElementById("EmailErr");
let re = /\S+@\S+\.\S+/;
const password = document.getElementById("p1");
let p1err = document.getElementById("PasswordErr");
const confpassword = document.getElementById("p2");
let p2err = document.getElementById("ConfirmPasswordErr");
const form = document.getElementById("regform");
form.addEventListener('submit', (e) => {
    if (name.value === '' || name.value === null) {
        nameerr.style.fontSize = "small"
        nameerr.style.color = "red"
        nameerr.innerText = "  Please Enter A Name!";
    } else if (name.value.length > 0) {
        nameerr.innerHTML = "";
    }
    if(phone.value === '' || phone.value === null){
        phoneerr.style.fontSize ="small"
        phoneerr.style.color="red"
        phoneerr.innerText = "  Please Enter at Least 10 digits!";
    }else if(phone.value.length >= 10){
        phoneerr.innerHTML = "";
    }
    if (!re.test(email.value)) {
        emailerr.style.fontSize = "small"
        emailerr.style.color = "red"
        emailerr.innerText = "  Please Enter A Valid Email!";
    }
    else if (re.test(email.value)) {
        emailerr.innerText = ""
    }
    if (password.value.length < 8 || password.value === null) {
        p1err.style.fontSize = "small"
        p1err.style.color = "red"
        p1err.innerText = "  Please Enter A 8 digits password!";
    } else if (password.value.length >= 8) {
        p1err.innerHTML = "";
    }
    if (password.value != confpassword.value) {
        p2err.style.fontSize = "small"
        p2err.style.color = "red"
        p2err.innerText = "  The Password Does Not Match!!";
    } else if (password.value == confpassword.value) {
        p2err.innerHTML = "";
    }
    e.preventDefault();
});

function phonecheck() {
    let s = phone.value
    if(s.length < 10 || s.length > 10){
        phoneerr.style.color = "red"
        phoneerr.style.fontSize = "small"
        phoneerr.innerText = "  Please Enter A 10 Digit Phone Number"
    }else if (s[0] == 0 && s[1] == 5) {
        phoneerr.innerText = ""
    }
     else {
        phoneerr.style.color = "red"
        phoneerr.style.fontSize = "small"
        phoneerr.innerText = "  Please Enter A Phone Number That Starts With \'05\'"
    }
}
function NameCheck(){
    let s = name.value
    let reg = /^[a-z]+$/i;
    if(reg.test(s)){
       nameerr.innerText=""
    }else{
        nameerr.style.color = "red"
        nameerr.style.fontSize = "small"
        nameerr.innerText = "   Please Enter A Valid Name"
    }
}
function EmailCheck(){
    if (!re.test(email.value)) {
        emailerr.style.fontSize = "small"
        emailerr.style.color = "red"
        emailerr.innerText = "  Please Enter A Valid Email!";
    }
    else if (re.test(email.value)) {
        emailerr.innerText = ""
    }
}
function PasswordCheck(){
    if (password.value.length < 8 || password.value === null) {
        p1err.style.fontSize = "small"
        p1err.style.color = "red"
        p1err.innerText = "  Please Enter A 8 digits password!";
    } else if (password.value.length >= 8) {
        p1err.innerHTML = "";
    }
}
function ConfirmPasswordCheck(){
    if (password.value != confpassword.value) {
        p2err.style.fontSize = "small"
        p2err.style.color = "red"
        p2err.innerText = "  The Password Does Not Match!!";
    } else if (password.value == confpassword.value) {
        p2err.innerHTML = "";
    }
}