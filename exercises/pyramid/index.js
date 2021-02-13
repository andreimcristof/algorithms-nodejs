// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

// const chars = (n, char) => {
//   let t = "";
//   for (let i = 1; i <= n; i++) {
//     t += char;
//   }
//   return t;
// };

// function pyramid(n) {
//   for (let row = 1; row <= n; row++) {
//     const totalLength = row + (row - 1);
//     if (row === 1 || row == n) {
//       hashCount = totalLength;
//     } else hashCount == row - 1;

//     const spaceCount = totalLength - hashCount;

//     // if it's first or last row, totalLength === hashcount
//     let line = "";
//     console.log("total", totalLength, "spaces", spaceCount, "hashes", hashCount);
//     line = chars(Math.floor(spaceCount / 2), " ") + chars(hashCount, "#") + chars(Math.floor(spaceCount / 2), " ");
//     console.log(line);
//   }
// }

// function pyramid(n) {
//   const total = 2 * n - 1;
//   const center = Math.floor(total / 2);

//   for (let row = 0; row < n; row++) {
//     let level = "";
//     for (let column = 0; column < total; column++) {
//       // console.log("center", center, "row", row, "column", column);
//       if (center - row <= column && center + row >= column) level += "#";
//       else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }

function pyramid(n, row = 0, level = "") {
  const totalRowLength = 2 * n - 1;
  if (row === n) {
    return;
  }

  if (level.length === totalRowLength) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor(totalRowLength / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;
