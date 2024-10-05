
const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log( `✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`)
  }else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};


const countLetters = function (str){
  let letterCount = [];

  for(const element of str){
    if (element !== ' '){
     if(letterCount[element]){
      letterCount[element] += 1;
     }else{
      letterCount[element] = 1;
     }
    }
  }

  return letterCount;

}


const outcome = countLetters('Hello World');

assertEqual(outcome['H'], 1);
assertEqual(outcome['e'], 1);
assertEqual(outcome['l'], 3);
assertEqual(outcome['o'], 2);
assertEqual(outcome['W'], 1);
assertEqual(outcome['r'], 1);
assertEqual(outcome['d'], 1);
