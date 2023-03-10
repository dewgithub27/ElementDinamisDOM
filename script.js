let slideIndex = 0;

const updateSlide = (n) => {
  slideIndex += n;
  showSlide(slideIndex);
}

const showSlide = (n) => {
  const slides = document.getElementsByClassName("slider-item");
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

showSlide(slideIndex);

const modal1 = document.getElementById("myModal1");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");
const modal4 = document.getElementById("myModal4");
const modal5 = document.getElementById("myModal5");
const message = document.getElementById("myMessage");

const openButton1 = document.getElementById("openModalButton1");
const openButton2 = document.getElementById("openModalButton2");
const openButton3 = document.getElementById("openModalButton3");
const openButton4 = document.getElementById("openModalButton4");
const openButton5 = document.getElementById("openModalButton5");
const openButtonMessage = document.getElementById("buttonMessage");

const closeIcon1 = document.getElementById("closeModalIcon1");
const closeIcon2 = document.getElementById("closeModalIcon2");
const closeIcon3 = document.getElementById("closeModalIcon3");
const closeIcon4 = document.getElementById("closeModalIcon4");
const closeIcon5 = document.getElementById("closeModalIcon5");
const closeIconMessage = document.getElementById("closeMessageIcon");

openButton1.addEventListener('click', () => {
  modal1.style.display = "block";
});
openButton2.addEventListener('click', () => {
  modal2.style.display = "block";
});
openButton3.addEventListener('click', () => {
  modal3.style.display = "block";
});
openButton4.addEventListener('click', () => {
  modal4.style.display = "block";
});
openButton5.addEventListener('click', () => {
  modal5.style.display = "block";
});
openButtonMessage.addEventListener('click', () => {
  message.style.display = "block";
});

closeIcon1.addEventListener('click', () => {
  modal1.style.display = "none";
});
closeIcon2.addEventListener('click', () => {
  modal2.style.display = "none";
});
closeIcon3.addEventListener('click', () => {
  modal3.style.display = "none";
});
closeIcon4.addEventListener('click', () => {
  modal4.style.display = "none";
});
closeIcon5.addEventListener('click', () => {
  modal5.style.display = "none";
});
closeIconMessage.addEventListener('click', () => {
  message.style.display = "none";
});

const accordion = document.getElementsByClassName("accordion");

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      const panel = this.nextElementSibling;

      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }