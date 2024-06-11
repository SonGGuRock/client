export default function sliceItems<T>(
  limit: number,
  data?: T[]
): { limited: T[]; rest: T[] } {
  if (!data) {
    return {
      limited: [],
      rest: [],
    };
  } else {
    const limited = data.slice(0, limit);
    const rest = data.slice(limit);
    return { limited, rest };
  }
}
