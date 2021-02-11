// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// function reverse(str) {
//   let reversed = "";
//   let arr = str.split("");
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

function reverse(str) {
  let t = str.split("");
  const actionForEveryItem = (reversed, currentChar) => currentChar + reversed;
  return t.reduce(actionForEveryItem, "");
}

reverse("");
module.exports = reverse;
