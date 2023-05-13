// https://smartstore.naver.com/minimalback/products/5202123784?NaPm=ct%3Dlh8cl22w%7Cci%3Da478fc84282c1f4501c0202fcf48dce8711b977a%7Ctr%3Dslct%7Csn%3D1042661%7Chk%3D0b06106a40fcfc33e3428ad8e27b36611ad36e7e
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
    "./img/img8.jpg",
  ],
};
const itemOption = {
  option_name: "컬러",
  option_items: ["카키", "브라운", "탄", "아이보리", "블랙"],
};

// initialize item info mapping
const item_name = itemInfo.name;
const item_price = itemInfo.price;
const price = uncomma(item_price);
const item_imgs = [...itemInfo.imgs];
const option_name = itemOption.option_name;
const option_contents = [...itemOption.option_items];

// selected item info
let purchase_option_total_cnt = [];

for (let i = 0; i < option_contents.length; i++) {
  purchase_option_total_cnt[i] = 0;
}

let purchase_total_count = 0;

for (let i = 0; i < option_contents.length; i++) {
  purchase_total_count += purchase_option_total_cnt[i];
}

let purchase_total_price = purchase_total_count * price;
let purchase_price_str = purchase_total_price.toLocaleString("ko-KR");
let slideIndex = 1;

// 시작 함수
setCarouselImgs(item_imgs);
setCurrentImgs(item_imgs);
showSlides(slideIndex);
setItemName(item_name);
setItemPrice(item_price);
setOptionBtn(option_name);
setOptionContentsBtns(option_contents);
showOptionContents();

// 구매하기 버튼 이벤트
let purchasebtn = document.getElementById("purchase_btn");

purchasebtn.addEventListener("click", () => {
  let purchase_option = [];
  let purchase_option_cnt = [];
  for (let i = 0; i < purchase_option_total_cnt.length; i++) {
    if (purchase_option_total_cnt[i] != 0) {
      purchase_option.push(option_contents[i]);
      purchase_option_cnt.push(purchase_option_total_cnt[i]);
    }
  }
  if (purchase_total_count == 0) {
    alert("1개 이상 선택하셔야 합니다.");
  } else {
    alert(
      "item_name : " +
        item_name +
        "\n option_name : " +
        option_name +
        "\n option_contents : " +
        purchase_option +
        "\n option_count : " +
        purchase_option_cnt +
        "\n total_count : " +
        purchase_total_count +
        "\n total_price : " +
        purchase_total_price.toLocaleString()
    );
  }
});

// 총 개수, 총 가격 업데이트
function updateTotalCount() {
  purchase_total_count = 0;
  let totalcountid = document.getElementById("totalcount");
  for (let i = 0; i < option_contents.length; i++) {
    purchase_total_count += purchase_option_total_cnt[i];
  }
  totalcountid.textContent = purchase_total_count;

  purchase_total_price = price * purchase_total_count;

  let totalpriceid = document.getElementById("totalprice");
  totalpriceid.textContent = purchase_total_price.toLocaleString();
}

// 옵션 컨트롤
function makeOptionControlArea(i, option_contents) {
  let selectedoptsid = document.querySelector(".selectedOpts");
  let optioncaldiv = document.createElement("div");
  optioncaldiv.className = "optionCal option_hide";
  selectedoptsid.appendChild(optioncaldiv);

  optioncaldiv = document.getElementsByClassName("optionCal");
  let countbtn = document.createElement("div");
  countbtn.className = "countBtn";
  optioncaldiv[i].appendChild(countbtn);

  countbtn = document.getElementsByClassName("countBtn");
  let p = document.createElement("p");
  p.textContent = option_contents;
  countbtn[i].appendChild(p);

  let textspan = document.createElement("span");
  textspan.textContent = "수량";
  countbtn[i].appendChild(textspan);

  let countspan = document.createElement("span");
  countspan.className = "count";
  countbtn[i].appendChild(countspan);

  countspan = document.getElementsByClassName("count");
  let minusa = document.createElement("a");
  minusa.href = "#";
  minusa.className = "minus";
  minusa.textContent = "-";
  countspan[i].appendChild(minusa);

  let resultspan = document.createElement("span");
  resultspan.id = "result";
  resultspan.textContent = purchase_option_total_cnt[i];
  countspan[i].appendChild(resultspan);

  let plusa = document.createElement("a");
  plusa.href = "#";
  plusa.className = "plus";
  plusa.textContent = "+";
  countspan[i].appendChild(plusa);

  let costareadiv = document.createElement("div");
  costareadiv.className = "optiontotalcost_area";
  optioncaldiv[i].appendChild(costareadiv);

  costareadiv = document.getElementsByClassName("optiontotalcost_area");
  let totalcostspan = document.createElement("span");
  totalcostspan.textContent =
    (purchase_option_total_cnt[i] * price).toLocaleString() + "원";
  totalcostspan.className = "optiontotalcost";
  costareadiv[i].appendChild(totalcostspan);

  let deleteoptiona = document.createElement("a");
  deleteoptiona.href = "#";
  deleteoptiona.className = "deleteoption";
  deleteoptiona.textContent = "X";
  costareadiv[i].appendChild(deleteoptiona);

  let plus = document.querySelectorAll(".plus");
  let minus = document.querySelectorAll(".minus");
  let deleteX = document.querySelectorAll(".deleteoption");
  let result = document.querySelectorAll("#result");
  let totalcost = document.querySelectorAll(".optiontotalcost");

  deleteX[i].addEventListener(
    "click",
    () => {
      purchase_option_total_cnt[i] = 0;
      result[i].textContent = purchase_option_total_cnt[i];
      let totalcostNum = 0;
      totalcost[i].textContent = totalcostNum.toLocaleString();
      updateTotalCount();
      let opt = document.getElementsByClassName("optionCal");
      opt[i].className = opt[i].className.replace(
        "optionCal",
        "optionCal option_hide"
      );
    },
    false
  );

  plus[i].addEventListener(
    "click",
    () => {
      purchase_option_total_cnt[i]++;
      result[i].textContent = purchase_option_total_cnt[i];
      let totalcostNum = purchase_option_total_cnt[i] * price;
      totalcost[i].textContent = totalcostNum.toLocaleString() + "원";
      updateTotalCount();
    },
    false
  );

  minus[i].addEventListener(
    "click",
    () => {
      if (purchase_option_total_cnt[i] > 1) {
        purchase_option_total_cnt[i]--;
        result[i].textContent = purchase_option_total_cnt[i];
        let totalcostNum = purchase_option_total_cnt[i] * price;
        totalcost[i].textContent = totalcostNum.toLocaleString() + "원";
        updateTotalCount();
      } else {
        alert("1개 이상 가능합니다.");
      }
    },
    false
  );
}

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

    a = document.getElementById(`option_li${i}`);

    makeOptionControlArea(i, option_contents[i]);

    let totalcountid = document.getElementById("totalcount");
    totalcountid.textContent = purchase_total_count;

    let totalpriceid = document.getElementById("totalprice");
    totalpriceid.textContent = purchase_total_price;

    a.addEventListener("click", () => {
      if (purchase_option_total_cnt[i] > 0) {
        alert("이미 선택된 옵션입니다.");
      } else {
        purchase_option_total_cnt[i] = 1;
        let resultspan = document.querySelectorAll("#result");
        resultspan[i].textContent = purchase_option_total_cnt[i];
        let optioncost = document.querySelectorAll(".optiontotalcost");
        optioncost[i].textContent =
          (purchase_option_total_cnt[i] * price).toLocaleString() + "원";
        let div = document.querySelectorAll(".optionCal");
        div[i].className = div[i].className.replace(" option_hide", "");
        updateTotalCount();
      }
    });
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
