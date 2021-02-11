// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// const capitalizeWord = (word) => {
//   let t = [];

//   for (const [index, char] of word.split("").entries()) {
//     t.push(index == 0 ? char.toUpperCase() : char);
//   }
//   return t.join("");
// };

// function capitalize(str) {
//   const sep = " ";
//   const words = str.split(sep);
//   let cwords = [];
//   for (const w of words) {
//     cwords.push(capitalizeWord(w));
//   }
//   return cwords.join(sep);
// }

// const capitalizeWord = (word) => {
//   const first = word[0].toUpperCase();
//   const rest = word.slice(1);
//   return first + rest;
// };

// function capitalize(str) {
//   const sep = " ";
//   const words = str.split(sep);
//   let cwords = [];
//   for (const w of words) {
//     cwords.push(capitalizeWord(w));
//   }
//   return cwords.join(sep);
// }

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    const element = str[i];
    if (str[i - 1] != " ") result += str[i];
    else result += str[i].toUpperCase();
  }

  return result;
}

module.exports = capitalize;
