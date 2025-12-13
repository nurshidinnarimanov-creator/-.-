import { saveExpenses, loadExpenses } from "./storage.js";
import { render } from "./ui.js";
import { generateId } from "./utils.js";

let expenses = loadExpenses();
const list = document.getElementById("list");

window.removeFn = (id) => {
  expenses.delete(id);
  saveExpenses(expenses);
  render(list, expenses, removeFn);
};

document.getElementById("addBtn").onclick = () => {
  const title = document.getElementById("titleInput").value.trim();
  const amount = Number(document.getElementById("amountInput").value);
  const category = document.getElementById("categoryInput").value.trim();

  if (!title || !amount || !category) {
    alert("Заполните все поля!");
    return;
  }

  const id = generateId();

  expenses.set(id, { id, title, amount, category });

  saveExpenses(expenses);
  render(list, expenses, removeFn);
};

document.getElementById("searchBtn").onclick = () => {
  const query = document.getElementById("searchInput").value.trim().toLowerCase();

  const filtered = new Map(
    [...expenses.entries()].filter(([, item]) =>
      item.category.toLowerCase().includes(query)
    )
  );

  render(list, filtered, removeFn);
};

render(list, expenses, removeFn);
