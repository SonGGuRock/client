const getDayName = (date: Date) => {
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  return dayNames[date.getDay()];
};

export default getDayName;
