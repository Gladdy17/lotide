
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


const assertArraysEqual = function(arr1, arr2) {
  if(eqArrays(arr1, arr2)){
   console.log( `✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`);
  }else {
   console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
 };

 const without = function(arr1, arr2){
  let newarryvalue = [];
  for(let i = 0; i < arr1.length; i++) {
    if(arr2.includes(arr1[i])){
      continue;
    }
    newarryvalue.push(arr1[i]);
  }
  return newarryvalue;
}


assertArraysEqual(without([1, 2, 3], [2, 3]), [1]);
assertArraysEqual(without([1, 2], [2, 3]), [1]);
assertArraysEqual(without([], [1, 2, 3]), []);
