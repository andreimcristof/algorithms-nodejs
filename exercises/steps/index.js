// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const stepLine = (hashes, spaces) => {
  let result = [];

  for (let i = 0; i < hashes; i++) {
    result.push("#");
  }

  for (let j = 0; j < spaces; j++) {
    result.push(" ");
  }
  return result.join("");
};

function steps(n) {
  for (let i = 1; i <= n; i++) {
    console.log(stepLine(i, n - i));
  }
}

module.exports = steps;
