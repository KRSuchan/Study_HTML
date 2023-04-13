function Prefixer(prefix) {
  this.prefix = prefix;
}
console.log(1, this);
Prefixer.prototype.prefixArray = function (arr) {
  console.log(2, this);
  return arr.map((x) => `${this.prefix}  ${x}`);
};
const pre = new Prefixer("Hi");
console.log(pre.prefixArray(["Lee", "Kim"]));
