
const card=document.querySelectorAll(".card__inner").forEach( card => card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
  })); 

  



  ScrollReveal({
    reset:true,
    distance:'70px',
    duration:2500,
    delay:200
});

ScrollReveal().reveal('heading',{delay:200, origin:'left', mobile: false});
ScrollReveal().reveal('.row-22, .row-11 ',{delay:400,mobile: false});

