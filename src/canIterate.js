function canIterate(obj) {
  try {
    obj[Symbol.iterator]();
    return true;
  } catch (e) {
    return false;
  }
}

// console.log(canIterate(new Map())); // true
// console.log(canIterate(new Set())); // true
// console.log(canIterate(new Array())); // true
// console.log(canIterate(null)); // false
// console.log(canIterate(10)); // false
// console.log(canIterate('Netology')); // true
