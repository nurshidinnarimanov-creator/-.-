const {
  factorial,
  sumArray,
  findMaxBroken,
  findMax
} = require("./functions");

test("factorial works", () => {
  expect(factorial(5)).toBe(120);
  expect(factorial(0)).toBe(1);
});

test("sumArray works", () => {
  expect(sumArray([1, 2, 3])).toBe(6);
});

test("findMaxBroken returns WRONG result", () => {
  expect(findMaxBroken([3, 10, 1, 7])).not.toBe(10);
});

test("findMax returns correct max", () => {
  expect(findMax([3, 10, 1, 7])).toBe(10);
});
