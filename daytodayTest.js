// const reverseString = (str) => str.split("").reverse().join("");
// function reverseString(str) {
//   let revString = "";
//   for (const chr of str) {
//     revString = chr + revString;
//   }
//   return revString;
// }

// function reverseString(str) {
//   let revString = "";
//   str.split("").forEach((char) => {
//     revString = char + revString;
//   });
//   return revString;
// }

// function reverseString(str) {
//   let revString = "";
//   str.split("").forEach((char) => {
//     revString = char + revString;
//   });
//   return revString;
// }

// const reverseString = (str) => {
//   let revString = "";
//   for (let index = str.length - 1; index >= 0; index--) {
//     revString += str[index - 1];
//   }
//   return revString;
// };

// const reverseString = (str) => {
//   return str.split("").reduce((acc, curr) => curr + acc, "");
// };

// function reverseString(str) {
//   let arr = [...str]; // convert string to array
//   return arr
//     .map((_, i, arr) => {
//       return arr[arr.length - 1 - i];
//     })
//     .join("");
// }

function reverseString(str) {
  let rString = "";
  [...str].map((_) => {
    rString = _ + rString;
  });
  return rString;
}

function isPalindrome(str) {
  return str == [...str].reverse().join("");
}

function capitalizeLetters(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeLetters("i love java script"));
