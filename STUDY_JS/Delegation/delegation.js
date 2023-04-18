var lis = document.querySelectorAll("li");
// lis.forEach((li) => li.addEventListener("click", toggleList));
function toggleList(event) {
  event.target.classList.toggle("remove");
}

var ul = document.getElementById("sampleList");
ul.addEventListener("click", toggleList);

var addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addList);
function toogleList(event) {
  var clickedLi = document.getElementById(event.target.id);
  clickedLi.classList.toggle("remove");
}

function addList() {
  var ul = document.getElementById("sampleList");
  var nextSeq = ul.children.length + 1;
  var newLi = document.createElement("li");
  newLi.id = `list${nextSeq}`;
  newLi.appendChild(document.createTextNode("추가 리스트 " + nextSeq));
  ul.appendChild(newLi);
}
