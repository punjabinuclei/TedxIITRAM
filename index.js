



ScrollReveal({
    reset:true,
    distance:'70px',
    duration:2500,
    delay:200
});

ScrollReveal().reveal('.hero-pg-text,.btn-group, .sponsers-logo',{delay:200, origin:'left'});
ScrollReveal().reveal('.Hero-page-img, .containers, .text-box, .footer-section',{delay:200, origin:'right'});
ScrollReveal().reveal('.speakers-heading, .about-heading, .line, .map-registration',{delay:400,});






const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = 4;
let next = 1;

for (let i = 0; i < button.length; i++) {
	button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
	current = number;
	prev = current - 1;
	next = current + 1;

	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove("active");
		slides[i].classList.remove("prev");
		slides[i].classList.remove("next");
	}

	if (next == 5) {
		next = 0;
	}

	if (prev == -1) {
		prev = 4;
	}

	slides[current].classList.add("active");
	slides[prev].classList.add("prev");
	slides[next].classList.add("next");
}





// Map

map.on('load', function () {
    map.resize();
});

// 

show = () => {

	if (document.getElementById("brdrgrp").style.display === "none") {
		brdrgrp = document.getElementById("brdrgrp");
		brdrgrp.style.display = "block";
		brdrgrp.style.marginTop = "5px";
		document.getElementById("participateNow").classList.remove('bi-arrow-down');
		document.getElementById("participateNow").classList.add('bi-x-lg');
	} else {
		document.getElementById("brdrgrp").style.display = "none";
		document.getElementById("participateNow").classList.remove('bi-x-lg');
		document.getElementById("participateNow").classList.add('bi-arrow-down');
	}


}

