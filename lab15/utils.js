export function generateId() {
  return Math.floor(Math.random() * 1000000);
}

// тестируемая функция
export function sum(expensesArray) {
  return expensesArray.reduce((acc, x) => acc + x.amount, 0);
}
