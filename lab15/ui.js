export function render(listElem, expenses, removeFn) {
  listElem.innerHTML = "";

  if (expenses.size === 0) {
    listElem.innerHTML = `
      <li class="text-sm text-slate-500">
        Нет данных. Добавьте первый расход.
      </li>
    `;
    return;
  }

  expenses.forEach((item) => {
    const li = document.createElement("li");
    li.className =
      "flex items-center justify-between gap-3 border border-slate-200 rounded-lg px-3 py-2 bg-slate-50";

    const left = document.createElement("div");
    left.className = "flex flex-col";

    const titleEl = document.createElement("span");
    titleEl.className = "font-medium text-sm";
    titleEl.textContent = `${item.title} — ${item.amount} тг`;

    const categoryEl = document.createElement("span");
    categoryEl.className = "text-xs text-slate-500";
    categoryEl.textContent = `Категория: ${item.category}`;

    left.appendChild(titleEl);
    left.appendChild(categoryEl);

    const btn = document.createElement("button");
    btn.textContent = "Удалить";
    btn.className =
      "text-xs px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 active:bg-red-700 transition-colors";
    btn.onclick = () => removeFn(item.id);

    li.appendChild(left);
    li.appendChild(btn);
    listElem.appendChild(li);
  });
}
