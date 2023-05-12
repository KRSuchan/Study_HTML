const itemInfo = {
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
};
const itemOption = {
  option_name: "컬러",
  option_items: ["카키", "브라운", "탄", "아이보리", "블랙"],
};
const item_name = itemInfo.name;
const item_price = itemInfo.price;
const price = uncomma(item_price);
const item_imgs = [...itemInfo.imgs];
const option_name = itemOption.option_name;
const option_contents = [...itemOption.option_items];

let slideIndex = 1;

setCarouselImgs(item_imgs);
setCurrentImgs(item_imgs);
showSlides(slideIndex);
setItemName(item_name);
setItemPrice(item_price);
setOptionBtn(option_name);
setOptionContentsBtns(option_contents);
showOptionContents();

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let result = document.querySelector("#result");
let totalcost = document.querySelector(".totalcost");
let i = 1;

plus.addEventListener("click", () => {
  i++;
  result.textContent = i;
  let totalcostNum = i * price;
  totalcost.textContent = "원" + totalcostNum.toLocaleString();
});

minus.addEventListener("click", () => {
  if (i > 0) {
    i--;
    result.textContent = i;
    let totalcostNum = i * price;
    totalcost.textContent = "원" + totalcostNum.toLocaleString();
  } else {
    totalcost.textContent = "원" + 0;
  }
});

function uncomma(str) {
  str = "" + str.replace(/,/gi, "");
  str = str.replace(/(^\s*)|(\s*$)/g, "");

  return new Number(str); //문자열을 숫자로 반환
}

function showOptionContents() {
  let option = document.getElementById("options");
  let ul = document.getElementById("option_ul");

  option.addEventListener("click", function () {
    if (ul.style.display == "block") {
      ul.style.display = "none";
    } else {
      ul.style.display = "block";
    }
  });
}
function setOptionContentsBtns(option_contents) {
  // parent
  let option = document.getElementById("options");

  let ul = document.createElement("ul");
  ul.setAttribute("class", "option_ul option_hide");
  ul.setAttribute("id", "option_ul");
  option.appendChild(ul);

  let opt_ul = document.getElementById("option_ul");

  for (let i = 0; i < option_contents.length; i++) {
    var li = document.createElement("li");
    li.setAttribute("id", `option_li${i}`);
    li.setAttribute("class", "option_li");

    var a = document.createElement("a");
    a.setAttribute("href", "#");
    a.setAttribute("class", "option_a");
    a.role = "option";
    a.textContent = option_contents[i];

    li.appendChild(a);
    opt_ul.appendChild(li);
  }
}
function setOptionBtn(option_name) {
  // parent
  var div_options = document.getElementById("options");

  // child
  var btn_option = document.createElement("button");
  btn_option.setAttribute("class", "option_btn");
  btn_option.setAttribute("id", "option_btn");
  btn_option.textContent = option_name;

  div_options.appendChild(btn_option);
}
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
  id_item_price.style.fontSize = "30px";
  id_item_price.textContent = price;
}
