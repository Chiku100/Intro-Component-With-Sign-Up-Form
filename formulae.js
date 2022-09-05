const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const firstname = form['firstname'].value;
    const lastname = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;
    if (firstname === '') {
        addError1()
    } else {
        console.log("ok")
    }
    if (lastname === '') {
        addError2()
    } else {
        console.log("ok")
    }
    if (email === '') {
        addError3()
        document.querySelector(".def3 em").innerHTML = "Put a valid email"
    } else if (!isValid(email)) {
        addError3()
    } else {
        console.log("ok")
    }
    if (password === '') {
        addError4()
    } else {
        console.log("ok")
    }
})
function addError1() {
    document.querySelector(".def").classList.remove("error");

}
function addError2() {
    document.querySelector(".def2").classList.remove("error");

}
function addError3() {
    document.querySelector(".def3").classList.remove("error");

}
function addError4() {
    document.querySelector(".def4").classList.remove("error");

}
function removeError() {
    document.querySelectorAll("def").classList.add("error");
}

function isValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}