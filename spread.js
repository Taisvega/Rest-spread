// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

const findMin = (...args) => Math.min(...args);

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)];

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }
  
  const extend = (array1, array2) => [...array1, ...array2];
  
  const addKeyVal = (obj, key, val) => {
    return {...obj, [key]: val};
  }
  
  const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
  }
  