
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

const middle = function(array){
  for(let i = 0; i < array.length; i++){
    if(array.length <= 2 ) {
      return []
    }
    //How to get middle numbers

    const middlenum = array.length / 2 
    if (array.length % 2 == 0 ){
      return [array(middlenum)];
    }else {
      return [array(middlenum)]
    }
  }
}
