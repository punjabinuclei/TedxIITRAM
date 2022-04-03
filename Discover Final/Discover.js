
const card=document.querySelectorAll(".card__inner").forEach( card => card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
  })); 



  ScrollReveal({
    reset:true,
    distance:'70px',
    duration:2500,
    delay:200
});

ScrollReveal().reveal('.box-1, .row-22, .footer-section',{delay:200, origin:'left', mobile: false});
ScrollReveal().reveal('.heading, .row-11',{delay:200, origin:'right', mobile: false});
ScrollReveal().reveal('.row-1, .row-2, .line',{delay:400, mobile: false});
