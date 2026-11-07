export function formatDate(
  dateString: string,
  separator: string = '.'
): string {
  if (!dateString) return '';

  const date = new Date(dateString);

  // 有効な日付かチェック
  if (isNaN(date.getTime())) return '';

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  // ハードコードされていた '.' を separator に変更
  return `${year}${separator}${month}${separator}${day}`;
}
