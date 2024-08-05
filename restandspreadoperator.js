//Ryan Hutchings
//Unit 14.4: Rest/Spread Operator Exercises

//ES5 Version of Function
// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

//ES2015 Version of Function
/* Write an ES2015 Version */
function filterOutOdds() {
  const nums = [...arguments];
  return nums.filter(num => num % 2);
}


//findMin
function findMin(...args) {
  return Math.min(...args);
}

// console.log(findMin(1, 4, 12, -3)) // -3
// console.log(findMin(1, -1)) // -1
// console.log(findMin(3, 1)) // 1


//mergeObjects
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })); // {a:1, b:2, c:3, d:4}


//doubleAndReturnArgs
function doubleAndReturnArgs(arr, ...doubleVals) {
  const doubleArr = doubleVals.reduce((mainArr, currVal) => {
    mainArr.push(currVal * 2);
    return mainArr;
  }, []);

  return [...arr, ...doubleArr];
}

// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); // [1,2,3,8,8]
// console.log(doubleAndReturnArgs([2], 10, 4)); // [2, 20, 8]


//Slice and Dice!
/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
  let removeIndex = Math.floor(Math.random() * items.length);

  const newArr = items.filter(element => element !== items[removeIndex]);

  return newArr;
};

// console.log(removeRandom([1, 2, 3, 4, 5, 6, 7]));
// console.log(removeRandom(['well', 'hello', 'there', 'good', 'sir']));

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

// console.log(extend([1, 2, 3, 4, 5, 6, 7], ['well', 'hello', 'there', 'good', 'sir']));
// console.log(extend(['well', 'hello', 'there', 'good', 'sir'], [true, false, false, true, true]));

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};

// personObj = {
//   name: 'Ryan',
//   year: 2024,
//   birthday: 'April 15',
// };
// console.log(addKeyVal(personObj, 'is18OrOver', true));

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
  const removedKeyObj = { ...obj };
  if (removedKeyObj[key]) {
    delete removedKeyObj[key];
  }

  return removedKeyObj;
};

// myPersonObj = {
//   name: 'Ryan',
//   year: 2024,
//   birthday: 'April 15',
//   is18OrOver: true
// };
// console.log(removeKey(myPersonObj, 'is18OrOver'));

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};


// const sweetTea = {
//   sweetBrand: 'Gold Peak',
//   sweetCalories: 190
// }
// const unsweetTea = {
//   unsweetBrand: 'Lipton',
//   unsweetCalories: 0
// }
// console.log(combine(sweetTea, unsweetTea));


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  const modifiedObj = { ...obj };
  modifiedObj[key] = val;
  return modifiedObj;
}

// shapeBlocks = {
//   triangle: 4,
//   circle: 2,
//   square: 3
// }
// console.log(update(shapeBlocks, 'dome', 2));