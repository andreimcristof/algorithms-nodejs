// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// const clean = (str) => str.replace(/[^\w]/g, "");

// const asCharacterMap = (str) => {
//   const t = clean(str).split("");
//   let mp = {};

//   for (const character of t) {
//     if (mp[character]) mp[character] += 1;
//     else mp[character] = 1;
//   }
//   return mp;
// };

// function anagrams(stringA, stringB) {
//   const mapA = asCharacterMap(stringA);
//   const mapB = asCharacterMap(stringB);

//   const hasSameKeys = Object.keys(mapA).length === Object.keys(mapB).length;
//   if (!hasSameKeys) return false;

//   Object.entries(mapA).forEach((t) => {
//     if (mapB[t[0]] != t[1]) {
//       return false;
//     }
//   });
//   return true;
// }

const clean = (str) => str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");

function anagrams(stringA, stringB) {
  return clean(stringA) === clean(stringB);
}

module.exports = anagrams;
