//body

const body = document.body

//main
const main = document.createElement("div");
body.prepend(main);
main.className = "main"

//navbar
const navbar = document.createElement("div");
main.append(navbar);
navbar.className = "navbar";

//title
const title = document.createElement("div");
navbar.append(title);
title.className = "title";

let h3 = document.createElement("h3");
title.append(h3);
h3.innerText = "Cosmic Counter";

//Output container
const outputContainer = document.createElement("div");
navbar.append(outputContainer);

// empty star
const star = document.createElement("i")
outputContainer.append(star);
star.className = "bi bi-star";
star.id = "empty-star";

//full star
const star2 = document.createElement("i")
outputContainer.append(star2);
star2.className = "bi bi-star-fill";
star2.id = "full-star";

//output
const output = document.createElement("span")
outputContainer.append(output);
output.id = "output";
output.innerText = "0";

//Counter container
const counterContainer = document.createElement("div");
main.append(counterContainer);
counterContainer.className = "counter-container";

//plus minus 1
const plusOne = document.createElement("div");
counterContainer.append(plusOne);
plusOne.className = "plus-one";

const minus1 = document.createElement("i")
plusOne.append(minus1);
minus1.className = "bi bi-patch-minus";
minus1.id = "minus";

const plus1 = document.createElement("i")
plusOne.append(plus1);
plus1.className = "bi bi-patch-plus";
plus1.id = "plus";

// plus minus 10

const plus10 = document.createElement("div");
counterContainer.append(plus10);
plus10.className = "plus10";

const tenMinus = document.createElement("i")
plus10.append(tenMinus);
tenMinus.className = "bi bi-patch-minus-fill";
tenMinus.id = "minus-10";

const tenPlus = document.createElement("i")
plus10.append(tenPlus);
tenPlus.className = "bi bi-patch-plus-fill";
tenPlus.id = "plus-10";

// caption

const captionContainer = document.createElement("div");
main.append(captionContainer);
captionContainer.className = "caption";

const testo1 = document.createElement("p");
captionContainer.append(testo1);
testo1.innerText = "Blue icons + or - will increase/decrease 1 star output";

const testo2 = document.createElement("p");
captionContainer.append(testo2);
testo2.innerText = "Yellow icons + or - will increase/decrease 10 stars output";

let refresh = document.createElement("span");
captionContainer.append(refresh);
refresh.innerText ="Refresh";
refresh.className = "bi bi-trash";
refresh.id= "refresh";

//footer
const footer = document.createElement("footer");
main.append(footer);
footer.className = "footer";
footer.innerText = "Realized by Bruno Arrostini - Copyright 2022"



// and now the counter will work
//plus one , minus one
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let fullStar = document.getElementById("full-star")
let emptyStar = document.getElementById("empty-star")

plus.addEventListener("click", function () {
    let output = document.getElementById("output");
    let result = Number(output.innerText) + 1;


    output.innerText = result;
    if (result >= 50) {
        fullStar.style.display = "inline-block", emptyStar.style.display = "none";
    } else {
        fullStar.style.display = "none", emptyStar.style.display = "inline-block";
    }
})

minus.addEventListener("click", function () {
    let output = document.getElementById("output");
    let result = Number(output.innerText) - 1;

    output.innerText = result;
    if (result >= 50) {
        fullStar.style.display = "inline-block", emptyStar.style.display = "none";
    } else {
        fullStar.style.display = "none", emptyStar.style.display = "inline-block";
    }
})

// plus ten , minus ten
let minusTen = document.getElementById("minus-10");
let plusTen = document.getElementById("plus-10");


plusTen.addEventListener("click", function () {
    let output = document.getElementById("output");
    let result = Number(output.innerText) + 10;

    output.innerText = result;

    if (result >= 50) {
        fullStar.style.display = "inline-block", emptyStar.style.display = "none";
    } else {
        fullStar.style.display = "none", emptyStar.style.display = "inline-block";
    }



})

minusTen.addEventListener("click", function () {
    let output = document.getElementById("output");
    let result = Number(output.innerText) - 10;

    output.innerText = result;
    if (result >= 50) {
        fullStar.style.display = "inline-block", emptyStar.style.display = "none";
    } else {
        fullStar.style.display = "none", emptyStar.style.display = "inline-block";
    }
})

// refresh
 document.getElementById("refresh");

refresh.addEventListener("click", function () {
    let output = document.getElementById("output");

    output.innerText = 0;
    fullStar.style.display = "none", emptyStar.style.display = "inline-block";
})

