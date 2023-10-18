var tmin = 20;
var tseg = 0;
  
var tpitch = (tmin * 60000) + (tseg * 1000);
setTimeout('show()', tpitch);
console.log('pitch em:', tpitch,'ms - totalizando',tmin,'min','e',tseg,'seg'); 
function show(){
var list = document.getElementsByClassName('ocultar');
for (var i = 0; i < list.length; i++) {
    list[i].style.visibility = 'visible';
    list[i].style.display = 'block';
    }
}


var swiper = new Swiper('.swiper-container', {
    // Configuration
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    slidesPerView: 1, // Shows one slide per view
    spaceBetween: 10, // Optional: Space between slides in px
    breakpoints: {
      // When window width is >= 640px
      640: {
        slidesPerView: 1, 
        spaceBetween: 20,
      },
    },
  });