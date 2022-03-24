
// Speakers

const card = document.querySelectorAll(".card__inner").forEach(card => card.addEventListener("click", function (e) {
	card.classList.toggle('is-flipped');
}));




// scroll reveal
// ScrollReveal({
//     reset:true,
//     distance:'70px',
//     duration:2500,
//     delay:200
// });

// ScrollReveal().reveal('.hero-pg-text,.btn-group, .about-heading,.owl-carousel,.footer-section ',{delay:200, origin:'left'});
// ScrollReveal().reveal('.hero-pg-text,.btn-group, .about-heading,.owl-carousel, .card-body',{delay:400, origin:'left'});
// ScrollReveal().reveal('.text-box,.Introducing-Speakers-heading, .btn-map, .sponser-head, .square ', {delay:600});
// ScrollReveal().reveal('.Hero-page-img, .sponsers-logo, .map ',{delay:500, origin:'right'});





// Particle Background

$('.owl-carousel').owlCarousel({
	loop: true,
	responsive: {
		0: {
			items: 2
		},
		600: {
			items: 2
		},
		1000: {
			items: 4
		}
	}
})



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

