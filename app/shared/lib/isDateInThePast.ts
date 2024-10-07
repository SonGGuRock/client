const isDateInThePast = (date: string, endTime: string) => {
  const dateObj = new Date(date);
  const dateYear = dateObj.getFullYear();
  const dateMonth = dateObj.getMonth() + 1;
  const dateDay = dateObj.getDate();
  const endTimeNum = Number(endTime);

  if (isNaN(dateObj.getTime())) {
    throw new Error('Invalid date format. Please use YYYY-MM-DD.');
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const currentHours = currentDate.getHours();

  function isTodayButNotPast() {
    return (
      dateYear === currentYear &&
      dateMonth === currentMonth &&
      dateDay === currentDay &&
      endTimeNum > currentHours
    );
  }

  if (isTodayButNotPast()) {
    return false;
  }

  return dateObj < currentDate;
};

export default isDateInThePast;
