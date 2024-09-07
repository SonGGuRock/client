function sliceList<T>(
  limit: number,
  data: T[] | undefined
): { limited: T[]; rest: T[] } {
  if (!Array.isArray(data)) {
    throw new Error(`Input must be an array. Received: ${typeof data}`);
  }

  const limited = data.slice(0, limit);
  const rest = data.slice(limit);
  return { limited, rest };
}

export default sliceList;
