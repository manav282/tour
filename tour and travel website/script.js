let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
let bookBtn = document.querySelector('#booking');
let canBook = 0;
let otpBtn = document.querySelector('#otp');
let otp = "110022";
let p = document.querySelector('#enterotp');

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
}

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});


formBtn.addEventListener('click', () => {
  loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
  loginForm.classList.remove('active');
});

videoBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
  });
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

bookBtn.addEventListener('click', () => {
  if (canBook == 0) {
    window.alert("Please login before booking");
  }
});

function generate() {
  var regexe = /^\S+@gmail.com/;
  if (regexe.test(document.f1.email.value) === false) {
    alert("Email must be in proper format");
    return false;
  }
  else {
    // console.log("In generate");
    p.classList.add('active');
    otpBtn.classList.add('active');
  }
}

function validate() {
  // console.log("In validate");
  if (document.f1.pass.value != otp) {
    alert("Incorrect otp");
    return false;
  }
  else {
    loginForm.classList.remove('active');
    canBook = 1;
    alert("Successfully signed in");
  }
}

function validate2() {
  let form2 = document.f2;
  if (form2.nm.value == "") { window.alert("Enter your name!!"); return false; }
  else {
    var regexn = /^[a-zA-Z\s]+$/;
    if (regexn.test(form2.nm.value) === false) { window.alert("Please enter a valid name"); return false; }
    else {
      var regexe = /^\S+@gmail.com/;
      if (regexe.test(form2.email.value) === false) {
        alert("Email must be in proper format");
        return false;
      }
      else {
        var regexm = /^[1-9]\d{9}$/;
        if (regexm.test(form2.no.value) === false) {
          window.alert("Please enter a valid 10 digit mobile number");
          return false;
        }
      }
    }
  }

}
