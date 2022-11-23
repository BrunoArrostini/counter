
//plus one , minus one
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let fullStar = document.getElementById("full-star")
let emptyStar = document.getElementById("empty-star")

plus.addEventListener("click", function(){
    let output = document.getElementById("output");
    let result = Number(output.innerText) + 1;
     

    output.innerText = result;
    if(result>=50){
        fullStar.style.display = "inline-block", emptyStar.style.display = "none";
    } else  {
        fullStar.style.display = "none", emptyStar.style.display = "inline-block";
    }
})

minus.addEventListener("click", function(){
    let output = document.getElementById("output");
    let result = Number(output.innerText) - 1;

    output.innerText = result;
    if(result>=50){
        fullStar.style.display = "inline-block", emptyStar.style.display = "none";
    } else  {
        fullStar.style.display = "none", emptyStar.style.display = "inline-block";
    }
})

// plus ten , minus ten
let minusTen = document.getElementById("minus-10");
let plusTen = document.getElementById("plus-10");


plusTen.addEventListener("click", function(){
    let output = document.getElementById("output");
    let result = Number(output.innerText) + 10;

    output.innerText = result;
    
    if(result>=50){
        fullStar.style.display = "inline-block", emptyStar.style.display = "none";
    } else  {
        fullStar.style.display = "none", emptyStar.style.display = "inline-block";
    }


     
})

minusTen.addEventListener("click", function(){
    let output = document.getElementById("output");
    let result = Number(output.innerText) - 10;

    output.innerText = result;
    if(result>=50){
        fullStar.style.display = "inline-block", emptyStar.style.display = "none";
    } else  {
        fullStar.style.display = "none", emptyStar.style.display = "inline-block";
    }
})

// refresh
let refresh = document.getElementById("refresh");

refresh.addEventListener("click", function(){
    let output = document.getElementById("output");
    
    output.innerText = 0;
    fullStar.style.display = "none", emptyStar.style.display = "inline-block";
})

