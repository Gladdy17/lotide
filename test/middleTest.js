const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

// Test cases for middle function
assertArraysEqual(middle([1, 2, 3]), [2]); // Odd-length array should return the middle element
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Even-length array should return the two middle elements
assertArraysEqual(middle([5]), []); // Single element array should return []
assertArraysEqual(middle([1, 2]), []); // Two element array should return []
