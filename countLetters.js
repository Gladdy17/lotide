
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
    console.log(element.split(''));
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


console.log(countLetters('Hello World'));
