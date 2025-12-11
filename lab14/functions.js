// Факториал
function factorial(n) {
  if (n < 0) return null;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Сумма массива
function sumArray(arr) {
  return arr.reduce((acc, x) => acc + x, 0);
}

// Сломанная функция для демонстрации DevTools
function findMaxBroken(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < max) { // ошибка специально оставлена
      max = arr[i];
    }
  }
  return max;
}

// Исправленная функция
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

module.exports = { factorial, sumArray, findMaxBroken, findMax };
