window.onload = () => {
  var divs = document.querySelectorAll("div");
};

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let item_imgs = document.getElementsByClassName("item_img");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < item_imgs.length; i++) {
    item_imgs[i].className = item_imgs[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  item_imgs[slideIndex - 1].className += " active";
}
