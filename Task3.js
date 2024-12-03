/**
 * Students:
 * Bshara Karkaby [49-2]
 * Moner Makhouly [49-2]
 *
 */

"use strict";

const numsArr = [5, 10, 7, 0, 2, 54, 12, 0, 1, 8, 0, 51];
let countZero = 0; // counts the-0 in the array

numsArr.forEach((num) => {
  num === 0 && countZero++; // [Another Way]   num === 0 ? countZero++ : countZero
});

console.log(`${countZero === 0 ? "No" : countZero} zeros in the array.`);
