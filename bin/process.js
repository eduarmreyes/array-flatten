#!/usr/bin/env node
const arrayExample = [2, 3, [3, 1, 5], [[[0], 0, 5]], [3]];
// const arrayExample = { name: "Eduardo" };
// eslint-disable-next-line no-extend-native
Array.prototype.flatten = function flattenFn() {
  let newArray = [];
  this.forEach(element => {
    if (Array.isArray(element)) {
      newArray = newArray.concat(element.flatten());
    }
    if (typeof element === "number" || typeof element === "string") {
      newArray.push(element);
    }
  });
  return newArray;
};

(function startProcess() {
  console.log(
    Array.isArray(arrayExample) ? arrayExample.flatten() : "Not an array"
  );
})();
