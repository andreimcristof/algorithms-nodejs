const match = require("./index");

test("match is a function", () => {
  expect(typeof match).toEqual("function");
});

test("returns empty array as no match", () => {
  expect(match(8, [1, 2, 3, 9])).toEqual([]);
});

test("returns match", () => {
  expect(match(8, [1, 2, 4, 4])).toEqual([4, 4]);
});

test("returns match", () => {
  expect(match(10, [5, 1, 3, 5])).toEqual([5, 5]);
});

test("returns match", () => {
  expect(match(10, [6, 1, 4, 2])).toEqual([4, 6]);
});
