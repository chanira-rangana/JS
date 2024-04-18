function addAll() {
  //ES5
  var args = Array.prototype.slice.call(arguments);
  var total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

//ES6
const addAll2 = (...numbers) => {
  let total = 0;
  numbers.forEach((num) => (total += num));
  return total;
};
const addAll3 = (...numbers) => numbers.reduce((acc, cur) => acc + cur);
console.log(addAll3(1, 5, 9, 8, 56, 6, 3));
