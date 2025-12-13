import { sum } from "./utils.js";

test("Сумма расходов считается корректно", () => {
  const arr = [
    { amount: 100 },
    { amount: 200 },
    { amount: 50 }
  ];

  expect(sum(arr)).toBe(350);
});
