var func = (a, b, ...c) => {
  let total = a + b;
  for (let i = 0; i < c.length; i++) {
    total += c[i];
  }
  return total;
}; // c는 여러개 -> 배열
console.log(func(1, 2));
console.log(func(1, 2, 3, 4, 5));

// closure
function outFunc(name) {
  var outVar = "my name is ";
  function innerFunc() {
    return outVar + name;
  }
  return innerFunc;
}
var result = outFunc("bono");
// closure : name 과 outVar 는 원래 메모리에서 잃는게 맞는데 JS는 남음
console.log("result: " + result());
