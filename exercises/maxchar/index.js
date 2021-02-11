// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var t = str.split("");
  let r = {};

  for (const ch of t) {
    if (r.hasOwnProperty(ch)) {
      r[ch] += 1;
    } else r[ch] = 1;
  }

  let max = Object.values(r).reduce((first, second) => {
    return Math.max(first, second);
  });

  for (const t in r) {
    if (r[t] == max) {
      return t;
    }
  }
}

module.exports = maxChar;
