import formatDateString from './formatDateString';

export const getToday = () => {
  return formatDateString({
    fullDateString: String(new Date()),
    options: {
      includeYear: false,
      includeMonth: false,
      includeHours: false,
      includeMinutes: false,
    },
  });
};

export const getFullToday = () => {
  return formatDateString({
    fullDateString: String(new Date()),
    options: {
      includeYear: true,
      includeMonth: true,
      includeHours: false,
      includeMinutes: false,
    },
  });
};

export const getTodayWithoutYear = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const days = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  const dayName = days[today.getDay()];
  return `${month}월 ${day}일 ${dayName}`;
};
