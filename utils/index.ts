export const getDate = (minusDay = 0) => {
  let currentDate = new Date();
  if (minusDay > 0) currentDate = new Date(currentDate.setDate(currentDate.getDate() - minusDay));

  const currentYear: string = currentDate.getFullYear() + "";

  let currentMonth: string = currentDate.getMonth() + 1 + "";
  if (currentMonth.length < 2) currentMonth = "0" + currentMonth;

  let currentDays: string = currentDate.getDate() + "";
  if (currentDays.length < 2) currentDays = "0" + currentDays;

  return `${currentYear}${currentMonth}${currentDays}`;
};
