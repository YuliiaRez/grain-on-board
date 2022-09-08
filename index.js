"use strict";

function loadGrain(levels) {
  let result = 0;
  let grain = 0;
  let max = 0;
  let indexMax = 0;
  let side1;
  let index1 = 0;
  let side2;
  let index2 = levels.length - 1;

  if (levels.length < 3) return 0;
  let i = 0;
  while (i < levels.length && levels[i] > levels[i + 1]) {
    index1 = levels.indexOf(levels[i]);
    i++;
  }
  let j = levels.length;
  while (j > 0 && levels[j] > levels[j - 1]) {
    index2 = levels.indexOf(levels[j]);
    i--;
  }

  if (index1 < index2) {
    for (let i = index1; i <= index2; i++) {
      if (max <= levels[i]) {
        max = levels[i];
        indexMax = i;
      }
    }
    side1 = levels[index1];
    for (let i = index1; i < indexMax; i++) {
      if (side1 >= levels[i]) {
        grain = side1 - levels[i];
      } else {
        side1 = levels[i];
        grain = 0;
      }
      result += grain;
    }
    side2 = levels[index2];

    for (let i = index2; i > indexMax; i--) {
      if (side2 >= levels[i]) {
        grain = side2 - levels[i];
      } else {
        side2 = levels[i];
        grain = 0;
      }
      result += grain;
    }
  }
  return result;
}

console.log(loadGrain([4, 1, 3, 1])); // 2;
console.log(loadGrain([1, 0, 10])); // 1;
console.log(loadGrain([10, 10])); // 0;
console.log(loadGrain([10, 1, 10])); // 9;
console.log(loadGrain([2, 1, 5, 2, 7, 4, 10, 1, 10, 1, 5])); // 20;
console.log(loadGrain([2, 0, 1, 5, 2, 7])); // 6;
console.log(loadGrain([2, 4, 2, 1])); // 0
console.log(loadGrain([3, 1, 1, 4])); // 4
console.log(loadGrain([7, 4])); // 0
console.log(loadGrain([])); // 0
