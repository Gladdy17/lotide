const assert = require("assert");
const middle = require("../middle");

describe("#middle", () => {
    it("should return the middle element for an odd-length array", () => {
        assert.deepStrictEqual(middle([1, 2, 3]), [2]); // Odd-length array should return the middle element
    });

    it("should return the two middle elements for an even-length array", () => {
        assert.deepStrictEqual(middle([1, 2, 3, 4]), [2, 3]); // Even-length array should return the two middle elements
    });

    it("should return an empty array for a single element array", () => {
        assert.deepStrictEqual(middle([5]), []); // Single element array should return []
    });

    it("should return an empty array for a two element array", () => {
        assert.deepStrictEqual(middle([1, 2]), []); // Two element array should return []
    });
});