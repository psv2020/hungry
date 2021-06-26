$(function() {
    $("#hamburger").click((e) => {
        e.preventDefault();

        $("#hamburger").toggleClass('is-active');

        $("#mobile__nav").fadeToggle(300);
    });
});

function validate() {
    var userName = document.getElementById("userName");
    var email = document.getElementById("email");

    e.preventDefault();

    if(!userName.value) {
        userName.style.border = "2px solid red";
        return false;
    }

    if(!email.value) {
        email.style.border = "2px solid red";
        return false;
    }

    return true;
}

const swiper = new Swiper('.specialties-wrapper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:'true',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  