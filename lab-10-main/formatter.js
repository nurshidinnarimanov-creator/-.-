export function formatResult(label, value) {
  const val = Number(value);
  const out = Number.isFinite(val) ? val.toFixed(2) : '—';
  return `${label}: ${out}`;
}

export function formatCurrency(value, locale = 'ru-RU', currency = 'KZT') {
  const val = Number(value) || 0;
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(val);
}
