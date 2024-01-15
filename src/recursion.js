// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n, product=1) {
  // base
   if (n === 0){
     return 1;
   }
  if (n < 0){
   return null;
  }
  if (n === 1){
   return product;
 
  }
  // recursion
  product *= n;
  return factorial(n - 1, product)
 };

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array){
  // base
  if (array.length === 0){
    return 0;
  }
  // recursion
  return array[0] + sum(array.slice(1));
}

// NO
// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n){
  if (n < 0){
    return isEven(-n)
  }
  if (n === 1){
    return false
  } else if (n === 0){
    return true
  }
  return isEven(n - 2)
}

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n, sum = 0) {
  // base
  if (n === 0){
      return sum;
  }
  // recursion
  if (n > 0){
    sum += n - 1
    return sumBelow(n - 1, sum);
  }
  if (n < 0){
    sum += n + 1
    return sumBelow(n + 1, sum);
  }
}
// sumBelow(10) = 9+8+7+6+5+4+3+2+1
// if 10 < 0 YES
  // sum = sum + 10 - 1
  //             sum + 9
  // 9
  // 9 = 9 + 9 = 1

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, output = []) {
  // base
  if (x === y){
    output.length === 0;
    return output;
  }
  if (x === y + 1){
    return output;
  }
  if (x === y - 1){
    return output;
  }
  if (x === 0 && y === 0){
    output.length === 0;
    return output;
  }
  // recursion
  if (x < y){
    output.push(x+1);
    return range(x+1, y, output);
  }
  if (x > y){
    output.push(x-1);
    return range(x-1, y, output);
  }
}

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
      return 1;
  } 
  else if (exp < 0){
      return 1 / exponent(base, -exp);
  } 
  else {
      return base * exponent(base, exp - 1);
  }
};
// 8^3 = 8 * 8 * 8 = 512
// we want to multiply the base by however many exponents we have

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
function powerOfTwo(num){
  if (num === 1){
      return true;
  } else if (num % 2 !== 0 || num === 0){
      return false;
  } else {
      return powerOfTwo(num/2);
  }
}

// 9. Write a function that accepts a string a reverses it.
function reverse(string){
  if (string.length === 1){
      return string;
  }
  return reverse(string.slice(1)) + string[0];
}
// "arina" => "anira"

// 10. Write a function that determines if a string is a palindrome.
// palindrome = same backwards and forwards
// IGNORE SPACES AND CAPITALIZATION
// palindrome = same backwards and forwards
// IGNORE SPACES AND CAPITALIZATION
var palindrome = function(string){
  // replace space to have no spaces
  var newString = string.replace(/ /g, '');
  // base
  // if the string is empty, all characters that were sliced have been checked so it is a palindrome
  if (newString.length === 0){
    // return true
    return true;
  }
  // if the first value of the string is not the same as the last value of the string
  if (newString[0].toLowerCase() !== newString[newString.length - 1].toLowerCase()){
    // return false
    return false;
  }
  // recursion
  // if the string is "jamie" we slice it at the letter j and e
  return palindrome(newString.slice(1, newString.length - 1));
};

// NO
// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
// multiply(2, 4) // 2 + 2 + 2 + 2 OR 4 + 4
var multiply = function(x, y) {
  if (x === 0 || y === 0){
    return 0;
  }
  if (x > 0){
    return y + multiply(x-1, y)
  }
  if (x < 0){
    return -y + multiply(x+1, y)
  }
};

// NO
// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// NO
// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
function gcd(x, y) {
}

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2){
  // base
  // if str1 and str2 are empty, that means each character matched
  if (str1.length === 0 && str2.length === 0) {
    // return true
    return true;
  }
  // recursion
  // if the first character of str1 is the same as the first chaacter of str2
  if (str1[0] === str2[0]) {
    // return the result of calling compareStr with str1 and str2 sliced at the first character
    return compareStr(str1.slice(1), str2.slice(1));
    // if the characters aren't the same
  } else {
    // return false
    return false;
  }
}

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
// ex: 'hello' => ['h', 'e', 'l', 'l', 'o']
var createArray = function(str, array =[]){
  // base
  // once this base is found, the recursion will stop
  // if the string's length = 0 aka there is no longer a string
  if (str.length === 0){
    // return an ampty array
    return array;
  }
  // recursion
  // add the first character of the string to the array
  array.push(str[0]);
  // return the result of calling createArray with str sliced at the first character and the array
  return createArray(str.slice(1), array);
}

// 17. Reverse the order of an array
var reverseArr = function(array, array1 = []){
  // base
  // once this base is found, the recursion will stop
  if (array.length === 0){
    return array1;
  }
  // recursion
  // push the last element of the original array into array1
  array1.push(array[array.length - 1])
  // return the result of calling reverseArr with the original array sliced at the last element and array1
  return reverseArr(array.slice(0, array.length-1), array1)
}

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, output=[]) {
  // base
  // once this base is found, the recursion will stop
  if (length === output.length){
    return output;
  }
  // recursion
  output.push(value);
  return buildList(value, length, output);
}

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // base
  // if the array is empty, return 0
  if (array.length === 0){
    return 0;
  }
  // recursion
  // if the first element of the array is the value, add 1 to the count
  if (array[0] === value){
    // return 1 + the result of calling itself again with the rest of the array (starting at the second element) and the same value
    return 1 + countOccurrence(array.slice(1), value);
  }
  // if the first element of the array is not the value, add 0 to the count
  return 0 + countOccurrence(array.slice(1), value);
}

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output=[]) {
  // base
  // once this base is found, the recursion will stop
  if (array.length === 0){
    return output;
  }

  // recursion
  output.push(array[0] * 2);
  return rMap(array.slice(1), callback, output);
};

// NO
// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// NO
// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// NO
// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// NO
// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // base
  // once this base is found, the recursion will stop
  if (n === 0){
    return 0;
  }
  if (n === 1){
    return 1;
  }
  if (n < 0){
    return null;
  }
  // recursion
  return nthFibo(n-1) + nthFibo(n-2);
}

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, array = []) {
  // base
  // once this base is found, the recusion will stop
  if (input.length === 0){
    return array;
  }
  // recursion
  array.push(input[0].toUpperCase());
  return capitalizeWords(input.slice(1), array);
}

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, array1 = []) {
  // base
  // once this base is found, the recusion will stop
  if (array.length === 0){
    return array1;
  }
  // recursion
  array1.push(array[0][0].toUpperCase() + array[0].slice(1));
  return capitalizeFirst(array.slice(1), array1);
}

// NO
// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// NO
// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj, output={}) {
  // base
  // once this base is found, the recursion will stop
  if (str.length === 0){
    return output;
  }
  // recursion
  if (output[str[0]] === undefined){
    output[str[0]] = 1;
  } else {
    output[str[0]] += 1;
  }
  return letterTally(str.slice(1), obj, output);
}

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, output=[]) {
  // base
  // once this base is found, the recursion will stop
  if (list.length === 0){
    return output;
  }

  // recursion
  if (list[0] !== list[1]){
    output.push(list[0]);
  }
  return compress(list.slice(1), output);
}

// NO
// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, output=[]){
  // base
  // once this base is found, the recursion will stop
  if (array.length === 0){
    return output;
  }

  // recursion
  // only push if the preceding element is not 0
  if (array[0] !== 0 && array[1] === 0){
    output.push(array[0])
    return minimizeZeroes(array.slice(1), output);
  } else if (array[0] === 0 && array[1] === 0){
    return minimizeZeroes(array.slice(1), output);
  } else {
    output.push(array[0]);
    return minimizeZeroes(array.slice(1), output);
  }
}

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, output=[]){
  // base
  // once this base is found, the recursion will stop
  if (array.length === 0){
    return output;
  }
  // recursion
  // if the first element is negative, push in the absolute value of the first element
  if (array[0] < 0){
    output.push(Math.abs(array[0]));
  } else {
    output.push(array[0]);
  }
  // if the second element is negative
  if (array[1] < 0){
    // push it in
    output.push(array[1]);
    // if the second element is positive
  } else if (array[1] > 0){
    // push in the negative value of array[1]
    output.push(array[1] * -1);
  }
  // slice off the first two elements
  return alternateSign(array.slice(2), output);
}

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str, output=""){
  // base
  // once this base is found, the recursion will stop
  if (str.length === 0){
    return output;
  }
  // recursion
  // if the first element is a number, replace it with the word equivalent
  if (str[0] === "1"){
    output += "one";
  } else if (str[0] === "2"){
    output += "two";
  } else if (str[0] === "3"){
    output += "three";
  } else if (str[0] === "4"){
    output += "four";
  } else if (str[0] === "5"){
    output += "five";
  } else if (str[0] === "6"){
    output += "six";
  } else if (str[0] === "7"){
    output += "seven";
  } else if (str[0] === "8"){
    output += "eight";
  } else if (str[0] === "9"){
    output += "nine";
  } else {
    output += str[0];
  }
  // slice off the first element
  return numToText(str.slice(1), output);
}

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------