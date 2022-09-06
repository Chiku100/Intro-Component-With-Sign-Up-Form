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
        document.querySelector(".def").classList.add("error");
    }
    if (lastname === '') {
        addError2()
    } else {
        document.querySelector(".def2").classList.add("error");
    }
    if (email === '') {
        addError3()
        document.querySelector(".def3 em").innerHTML = "Put a valid email"
    } else if (!isValid(email)) {
        console.log("ok")
    } else {
        document.querySelector(".def3").classList.add("error");
    }
    if (password === '') {
        addError4()
    } else {
        document.querySelector(".def4").classList.add("error");
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

function isValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
} 
function testLength(val) {
    if (val.length !== 0) {
        document.querySelector(".def").classList.add("error");
    }
}
function testLength2(val) {
    if (val.length !== 0) {
        document.querySelector(".def2").classList.add("error");
    }
}
function testLength3(val) {
    if (val.length !== 0 & isValid(email) ) {
        document.querySelector(".def3").classList.add("error");
    }
}
function testLength4(val) {
    if (val.length !== 0) {
        document.querySelector(".def4").classList.add("error");
    }
}
