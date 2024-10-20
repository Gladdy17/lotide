
const assert = require("assert");
const tail = require("../tail")



describe("#tail", () => {
    it("should return the tail of an array", () => {
        const result = tail(["Hello", "Lighthouse", "Labs"]);
        assert.strictEqual(result.length, 2); 
        assert.strictEqual(result[0], "Lighthouse"); 
        assert.strictEqual(result[1], "Labs"); 
    });

    it("should not change the original array length", () => {
        const words = ["Yo Yo", "Lighthouse", "Labs"];
        tail(words); 
        assert.strictEqual(words.length, 3);
    });

});   