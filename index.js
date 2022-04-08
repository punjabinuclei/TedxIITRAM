



ScrollReveal({
    reset:true,
    distance:'70px',
    duration:2500,
    delay:200
});

ScrollReveal().reveal('.box-1111, .sponsers-section ',{delay:200, origin:'left', mobile: false});
ScrollReveal().reveal('.Hero-page-img, .speakers-heading, .about-heading',{delay:200, origin:'right', mobile: false});
ScrollReveal().reveal('.slider-container, .text-box, .map-registration',{delay:200, mobile: false});








// Map

map.on('load', function () {
    map.resize();
});




// Btn------------------------------

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

