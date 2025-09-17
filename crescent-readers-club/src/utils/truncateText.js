export function truncateText(text, n = 140) {
  if (!text) return '';
  return text.length <= n ? text : text.slice(0, n - 1) + '…';
}
