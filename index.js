
// Speakers

const card=document.querySelectorAll(".card__inner").forEach( card => card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
  })); 
    



// scroll reveal
ScrollReveal({
    reset:true,
    distance:'60px',
    duration:2500,
    delay:200
});

ScrollReveal().reveal('.hero-pg-text, .about-heading',{delay:200, origin:'left'});
ScrollReveal().reveal('.text-box,.Introducing-Speakers-heading ');
ScrollReveal().reveal('.Hero-page-img',{delay:200, origin:'right'});





// Particle Background

