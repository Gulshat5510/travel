var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 70,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  window.addEventListener("scroll" ,function() {
let header = document.querySelector(".navbar");
header.classList.toggle("sticky", window.scrollY > 70);
});

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 2500
    },
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      820: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }
  });

  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      820: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }
  });

  var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      820: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
  });

  var swiper5 = new Swiper(".mySwiper5", {
    slidesPerView: 4,
    spaceBetween: 90,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      820: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }
  });

  var mybutton = document.getElementById("myBtn");

  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


