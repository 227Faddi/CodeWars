"use strict";
​
function flattenAndSort(array) {
  const result = [];
  array.map((arr) => result.push(...arr))
  return result.sort((a, b) => a - b);
}