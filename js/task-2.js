'use strict';
function makeArray(firstArray, secondArray, maxLength) {
  const newArray = [];
  for (let i = 0; i < firstArray.length; i++) {
    newArray.push(firstArray[i]);
  }
  for (let j = 0; j < secondArray.length; j++) {
    newArray.push(secondArray[j]);
  }
  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  } else {
    return newArray;
  }
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
