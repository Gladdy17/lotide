
const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log( `✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`)
  }else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};


const eqArrays = function(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  for(i = 0; i < arr1.length; i++){
  if (arr1[i] !== arr2[i]){
    return false;
    }
  }
    return true; 
  };



  eqArrays([1, 2, 3], [1, 2, 3]);
  eqArrays([1, 2, 3], [3, 2, 1]);
  eqArrays(["1", "2", "3"], ["1", "2", 4]);
  eqArrays(["1", "2", "3"], ["1", "2", "3"]);
 
