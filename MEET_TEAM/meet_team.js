
// tabs


(function($, document) {
    
    // get tallest tab__content element
    let height = -1;

      $('.tab__content').each(function() {
          height = height > $(this).outerHeight() ? height : $(this).outerHeight();
       $(this).css('position', 'absolute');
      });
    
    // set height of tabs + top offset
      $('[data-tabs]').css('min-height', height + 40 + 'px');
 
}(jQuery, document));






ScrollReveal({
  reset:true,
  distance:'70px',
  duration:2500,
  delay:200
});

ScrollReveal().reveal('.main-heading',{delay:200, origin:'left', mobile: false});
ScrollReveal().reveal('.tab label',{delay:200, origin:'right', mobile: false});
ScrollReveal().reveal('.teamss ',{delay:200, mobile: false});

