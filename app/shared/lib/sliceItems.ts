export default function sliceItems<T>(
  limit: number,
  data?: T[]
): { limited: T[]; rest: T[] } | undefined {
  if (!data) {
    return;
  } else {
    console.log(data.slice(0, limit));
    const limited = data.slice(0, limit);
    const rest = data.slice(limit);
    return { limited, rest };
  }
}
