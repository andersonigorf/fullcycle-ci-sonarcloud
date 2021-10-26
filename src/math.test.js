const math = require("./math");

test("add 1 + 2 to be equal 3", () => {
    expect(math.add(1, 2)).toBe(3);
});

test("add 10 + 10 to be equal 20", () => {
    expect(math.add(10, 10)).toBe(20);
});

test("multiply 1 * 5 to be equal 5", () => {
    expect(math.multiply(1, 5)).toBe(5);
});

test("multiply 100 * 0 to be equal 0", () => {
    expect(math.multiply(100, 0)).toBe(0);
});