export function formatDate(date: Date) {
  const year = date?.toLocaleString('ko-KR').split('.')[0].trim();
  const month = date
    ?.toLocaleString('ko-KR')
    .split('.')[1]
    .trim()
    .padStart(2, '0');
  const day = date
    ?.toLocaleString('ko-KR')
    .split('.')[2]
    .trim()
    .padStart(2, '0');

  return `${year}-${month}-${day}`;
}
