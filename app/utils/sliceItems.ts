export default function sliceItems<T>(
  data: T[],
  limit: number
): { limited: T[]; rest: T[] } {
  const limited = data.slice(0, limit);
  const rest = data.slice(limit);
  return { limited, rest };
}
