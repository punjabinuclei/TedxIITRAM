ScrollReveal({
    reset:true,
    distance:'70px',
    duration:2500,
    delay:200
});

ScrollReveal().reveal('.heading, .left-scroll-reveal',{delay:200, origin:'left', mobile: false});
ScrollReveal().reveal('.right-scroll-reveal',{delay:200, origin:'right', mobile: false});
ScrollReveal().reveal('',{delay:400,});

