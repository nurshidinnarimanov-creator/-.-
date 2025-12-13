export function saveExpenses(map) {
  const arr = [...map.values()];
  localStorage.setItem("expenses", JSON.stringify(arr));
}

export function loadExpenses() {
  const data = JSON.parse(localStorage.getItem("expenses")) || [];
  const map = new Map();
  data.forEach(item => map.set(item.id, item));
  return map;
}
