function revealPicture() {
    document.getElementById("pic2").classList.remove("hide"); //classList method
}

function firstNameCheck() {
    var msgOutput = document.getElementById("para");
    var addText = document.createTextNode("You forgot your first name. ");
    var userINPUT = document.getElementById("input1");
    if (userINPUT.value == "") {
        msgOutput.appendChild(addText);
    }
}


function lastNameCheck() {
    var msgOutput = document.getElementById("para");
    var addText = document.createTextNode("You forgot your last name. ");
    var userINPUT = document.getElementById("input2");
    if (userINPUT.value == "") {
        msgOutput.appendChild(addText);
    }
}

function numCheck() {
    var msgOutput = document.getElementById("para");
    var addText = document.createTextNode("You forgot your number. ");
    var userINPUT = document.getElementById("input3");
    if (userINPUT.value == "") {
        msgOutput.appendChild(addText);
    }
}

function emailCheck() {
    var msgOutput = document.getElementById("para");
    var addText = document.createTextNode("You forgot your email. ");
    var userINPUT = document.getElementById("input4");
    if (userINPUT.value == "") {
        msgOutput.appendChild(addText);
    }
}

//Adding Event Listeners to DOM Element
document.getElementById("submit").addEventListener("click", revealPicture);
document.getElementById("submit").addEventListener("click", firstNameCheck);
document.getElementById("submit").addEventListener("click", lastNameCheck);
document.getElementById("submit").addEventListener("click", numCheck);
document.getElementById("submit").addEventListener("click", emailCheck);
