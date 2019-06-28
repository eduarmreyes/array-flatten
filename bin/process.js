#!/usr/bin/env node
const arrayExample = [2, 3, [3, 1, 5], [[[0], 0, 5]], [3]];
// eslint-disable-next-line no-extend-native
Array.prototype.flatten = function flattenFn() {
  let newArray = [];
  this.forEach(element => {
    if (typeof element === "object") {
      newArray = newArray.concat(element.flatten());
    }
    if (typeof element === "number" || typeof element === "string") {
      newArray.push(element);
    }
  });
  return newArray;
};

(function startProcess() {
  console.log(arrayExample.flatten());
})();
