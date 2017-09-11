var slide_index = 1;
displaySlides(slide_index);

function nextSlide(n) {
    displaySlides(slide_index += n);
}

function currentSlide(n) {
    displaySlides(slide_index = n);
}

function displaySlides(n) {
    var i;
    var slides = document.getElementsByClassName("showSlide");

    if (n > slides.length) {slide_index = 1}
    if (n < 1) {slide_index = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display= "none";    
    }
    slides[slide_index - 1].style.display = "block";
}


// var slide_index = 0;
// displaySlides();

// function displaySlides() {
//     var i;
//     var slides = document.getElementsByClassName(showSlide);
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
    
//     slide_index++;
//     if (slide_index > slides.length) {slide_index = 1}
//     slides[slide_index - 1].style.display = "block";
//     setTimeout(displaySlides, 2000);
// }



function startSliding() {
    var slides = document.getElementsByClassName("showSlide");
    
    var next = 1;
    setInterval(function() {
        for (let i =0; i < slides.length; i++) {
            if ( slides[i].style.display === "block") {
                next = i + 1;       
            }
        }
        nextSlide(next);
    }, 4000);
}

let sect1 = document.querySelector(".sect1");
let sect2 = document.querySelector(".sect2");
let sect3 = document.querySelector(".sect3");

let sects = [sect1, sect2, sect3]
let sectlinks = ["sect1","sect2","sect3"]


for (let index = 0; index < sects.length; index++) {
    sects[index].addEventListener("click", function () {
        window.location.href=sectlinks[index];
    })
}
