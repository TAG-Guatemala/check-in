/*+++++ Scripts especiales para TAG Airlines +++++*/

// Funciòn para poner display block en un contenedor con el checkbox
console.log("Tag Cores scripts");

function showContent() {
    element = document.getElementById("tagPassengers");
    check = document.getElementById("flexSwitchCheckCheckedDesk");
    if (check.checked) {
        element.style.display='flex';
    }
    else {
        element.style.display='none';
    }
}

// Funciòn para poner display none en input de agragar pasajero con el checkbox

function hidenInput() {
    boxInput = document.getElementById("boxInputAdd1");
    buttonSend = document.getElementById("boxButtonAdd1")
    check = document.getElementById("checkAdd1");
    if (check.checked) {
        boxInput.style.display='block';
        buttonSend.style.display='block';
    }
    else {
        boxInput.style.display='none';
        buttonSend.style.display='none';
    }
}

// Funciones check para elviaje de regreso
function showContentReturn() {
    element = document.getElementById("tagPassengersReturn");
    check = document.getElementById("flexSwitchCheckCheckedDeskReturn");
    if (check.checked) {
        element.style.display='flex';
    }
    else {
        element.style.display='none';
    }
}

// Funciòn para poner display none en input de agragar pasajero con el checkbox

function hidenInputReturn() {
    boxInput = document.getElementById("boxInputAdd1Return");
    check = document.getElementById("checkAdd1Return");
    if (check.checked) {
        boxInput.style.display='block';
    }
    else {
        boxInput.style.display='none';
    }
}

function disabledDiv() {
    document.getElementById("tagFlyReturn").setAttribute("disabled")
}
