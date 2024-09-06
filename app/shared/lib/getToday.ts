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

export const getThisMonthWithYear = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return `${year}년 ${month}월`;
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

/**
 *
 * @param date : 'YYYY-MM-DD'
 * @returns dayName: '수요일'
 */

export function getDayOfWeek(dateString: string) {
  const date = new Date(dateString);
  const dayNumber = date.getDay();
  const daysOfWeek = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  return daysOfWeek[dayNumber];
}

export const getKrDateWithoutYear = (date: string) => {
  const month = date.split('-')[1];
  const day = date.split('-')[2];
  const dayName = getDayOfWeek(date);

  return `${month}월 ${day}일 ${dayName}`;
};
