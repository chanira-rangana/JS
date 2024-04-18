const reverseString = (str) => str.split("").reverse().join("");

function reverseString2(str) {
  let rstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rstr += str[i];
  }
  return rstr;
}

function reverseString3(str) {
  let revString = "";
  for (let char of str) {
    revString = char + revString;
  }
  return revString;
}

const reverseString4 = (str) =>
  str.split("").reduce((revString, char) => char + revString);

function reverseString5(str) {
  let revString = "";
  str.split("").forEach((char) => (revString = char + revString));
  return revString;
}

// console.log(reverseString5("computer system"));

// check wether palindrom

function isPalindrome(str) {
  return str == str.split("").reverse().join("");
}

//CHALLENGE 3: REVERSE AN INTEGER
function reverseInt(int) {
  const revString = int.toString().split("").reverse().join("");

  return parseInt(revString) * Math.sign(int);
}

// console.log(reverseInt(566));

console.log("chanira".toUpperCase());
