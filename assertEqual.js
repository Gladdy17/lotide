const assertEqual = function(actual, expected) {
  if(actual === expected){
    console.log( `✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`)
  }else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};

assertEqual("Test", "Test");
assertEqual("1", "1");
assertEqual("Testing", "Test");
assertEqual(2, 2.5);
