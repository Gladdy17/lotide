
const eqArrays = function(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  for(let i = 0; i < arr1.length; i++){
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


const flatten = function(arry){
  let flatarry = [];
  for (let i = 0; i < arry.length; i++){
    let el = arry[i];
  if(Array.isArray(el)) {
      flatarry = flatarry.concat(flatten(el));
    }else{
      flatarry.push(el);
    }

  }
  return flatarry;
}


console.log(flatten([1, 2, [3, 4], 5, [6]]));
