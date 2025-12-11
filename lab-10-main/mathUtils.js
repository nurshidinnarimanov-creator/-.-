export function percentOf(num, percent) {
  const n = Number(num) || 0;
  const p = Number(percent) || 0;
  return (n * p) / 100;
}

export function addPercent(num, percent) {
  const n = Number(num) || 0;
  return n + percentOf(n, percent);
}
export function subtractPercent(num, percent) {
  const n = Number(num) || 0;
  return n - percentOf(n, percent);
}