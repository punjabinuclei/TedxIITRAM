
// Speakers

const card=document.querySelectorAll(".card__inner").forEach( card => card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
  })); 
    



// scroll reveal
ScrollReveal({
    reset:true,
    distance:'70px',
    duration:2500,
    delay:200
});

ScrollReveal().reveal('.hero-pg-text,.btn-group, .about-heading,.owl-carousel',{delay:200, origin:'left'});
ScrollReveal().reveal('.text-box,.Introducing-Speakers-heading');
ScrollReveal().reveal('.Hero-page-img ',{delay:200, origin:'right'});





// Particle Background

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
        items:3
      }
  }
})





