import formatDateString from './formatDateString';

interface getDateArrayProps {
  beforeCount: number;
  afterCount: number;
  baseDate?: Date;
}

const getDateArray = ({
  beforeCount,
  afterCount,
  baseDate,
}: getDateArrayProps) => {
  const result = [];
  const base = baseDate ?? new Date();

  for (let i = beforeCount; i > 0; i--) {
    const newDate = new Date(base);
    newDate.setDate(base.getDate() - i);
    result.push(
      formatDateString({
        fullDateString: String(newDate),
        options: {
          includeHours: false,
          includeMinutes: false,
        },
      })
    );
  }

  result.push(
    formatDateString({
      fullDateString: String(base),
      options: {
        includeHours: false,
        includeMinutes: false,
      },
    })
  );

  for (let i = 1; i <= afterCount; i++) {
    const newDate = new Date(base);
    newDate.setDate(base.getDate() + i);
    result.push(
      formatDateString({
        fullDateString: String(newDate),
        options: {
          includeHours: false,
          includeMinutes: false,
        },
      })
    );
  }
  return result;
};

export default getDateArray;
