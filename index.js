



ScrollReveal({
    reset:true,
    distance:'70px',
    duration:2500,
    delay:200
});

ScrollReveal().reveal('.hero-pg-text,.btn-group, .sponsers-logo',{delay:200, origin:'left', mobile: false});
ScrollReveal().reveal('.Hero-page-img, .containers, .text-box, .footer-section',{delay:200, origin:'right', mobile: false});
ScrollReveal().reveal('.speakers-heading, .about-heading, .line, .map-registration',{delay:400, mobile: false});



ScrollReveal().reveal('.squares', {  });





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

