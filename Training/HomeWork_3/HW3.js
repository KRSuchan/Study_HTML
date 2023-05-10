const item = {
  name: "2023 코베아 네스트W/이너텐트 루프플라이 그라운드시트 포함",
  price: "730,000",
  imgs: [
    "./img/img1.jpg",
    "./img/img2.jpg",
    "./img/img3.jpg",
    "./img/img4.jpg",
    "./img/img5.jpg",
    "./img/img6.jpg",
    "./img/img7.jpg",
  ],
  option_name: ["컬러"],
  options: ["카키", "브라운", "탄", "아이보리", "블랙"],
};

const item_name = item.name;
const item_price = item.price;
const item_imgs = [...item.imgs];
const option_name = [...item.option_name];
const options = [...item.option_name];

let slideIndex = 1;

setCarouselImgs(item_imgs);
setCurrentImgs(item_imgs);
showSlides(slideIndex);
setItemName(item_name);
setItemPrice(item_price);

function setCarouselImgs(item_imgs) {
  for (let i = 0; i < item_imgs.length; i++) {
    // parent
    var div_slideshow_cont = document.getElementById("slide_top");

    // child
    var div_mySlides_fade = document.createElement("div");
    div_mySlides_fade.className = "mySlides fade";

    var imgs_mySlides = document.createElement("img");
    imgs_mySlides.src = item_imgs[i];
    imgs_mySlides.style = "width:100%";

    div_mySlides_fade.appendChild(imgs_mySlides);
    div_slideshow_cont.appendChild(div_mySlides_fade);
  }
}

function setCurrentImgs(item_imgs) {
  for (let i = 0; i < item_imgs.length; i++) {
    // parent
    var div_currentImg = document.getElementById("currentImg");

    // child
    var span_item_img = document.createElement("span");
    span_item_img.setAttribute("id", `bott_img${i}`);
    span_item_img.setAttribute("onmouseover", `currentSlide(${i + 1})`);
    span_item_img.className = "item_img";

    var img = document.createElement("img");
    img.src = item_imgs[i];

    span_item_img.appendChild(img);
    div_currentImg.appendChild(span_item_img);

    // var bott_img = document.getElementById(`bott_img${i}`);
    // bott_img.addEventListener("onmouseover", currentSlide(i + 1));
  }
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let imgs = document.getElementsByClassName("item_img");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < imgs.length; i++) {
    imgs[i].className = imgs[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  imgs[slideIndex - 1].className += " active";
}
function setItemName(name) {
  var id_item_name = document.getElementById("item_name");
  id_item_name.textContent = name;
}

function setItemPrice(price) {
  var id_item_price = document.getElementById("price");
  id_item_price.textContent = price;
}
