
let letter = document.getElementById("lettermsg1");

let letter1 = document.getElementById("lettermsg2")

let letter2 = document.getElementById("lettermsg3")

function openPopup(){
    letter.classList.add("open-popup");
}
function closePopup(){
    letter.classList.remove("open-popup");
}

function openPopup1(){
    letter1.classList.add("open-popup1");
}
function closePopup1(){
    letter1.classList.remove("open-popup1");
}

function openPopup2(){
    letter2.classList.add("open-popup2");
}
function closePopup2(){
    letter2.classList.remove("open-popup2");
}


mediumZoom('.zoom', {
    margin: 50
})

mediumZoom('.zoom-dark', {
    background: '#3B4049'
})