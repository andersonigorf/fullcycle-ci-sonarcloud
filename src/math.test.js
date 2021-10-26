const math = require("./math");

test("add 1 + 2 to be equal 3", () => {
    expect(math.add(1, 2)).toBe(3);
});

test("multiply 1 * 5 to be equal 5", () => {
    expect(math.multiply(1, 5)).toBe(5);
});