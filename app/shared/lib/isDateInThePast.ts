const isDateInThePast = (date: string) => {
  const dateObj = new Date(date);

  if (isNaN(dateObj.getTime())) {
    throw new Error('Invalid date format. Please use YYYY-MM-DD.');
  }

  const currentDate = new Date();

  return dateObj < currentDate;
};

export default isDateInThePast;
