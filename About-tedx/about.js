let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})




ScrollReveal({
  reset:true,
  distance:'70px',
  duration:2500,
  delay:200
});

ScrollReveal().reveal('',{delay:200, origin:'left', mobile: false});
ScrollReveal().reveal('',{delay:200, origin:'right', mobile: false});
ScrollReveal().reveal('',{delay:200, mobile: false});
