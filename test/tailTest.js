
const assertEqual = require("../assertEqual");
const tail = require("../tail")



const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // Call tail, but we don't need to store the result
assertEqual(words.length, 3); // Check