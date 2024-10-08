const eqObjects = function (object1, object2) {
  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (const key of obj1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `✅ ✅ ✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑 🛑 🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

const obj1 = { a: "1", b: "2" };
const obj2 = { a: "1", b: "2" };
assertObjectsEqual(obj1, obj2);
