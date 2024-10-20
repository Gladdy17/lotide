const eqArrays = require("./eqArrays")

const middle = function(array){
  for(let i = 0; i < array.length; i++){
    if(array.length <= 2 ) {
      return []
    }
    //How to get middle numbers

    const middleNum = Math.floor(array.length / 2);
    if (array.length % 2 == 0 ){
      return [array[middleNum - 1], array[middleNum]];
    }else {
      return [array[middleNum]]
    }
  }
};

module.exports = middle;