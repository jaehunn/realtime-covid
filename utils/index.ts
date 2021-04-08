type toColorArrowType = {
  color: "green" | "red" | "";
  arrow: "up" | "down" | "";
};

export const requestFormatDate = ([currentYear, currentMonth, currentDays]: string[]) => {
  if (currentMonth.length < 2) currentMonth = "0" + currentMonth;
  if (currentDays.length < 2) currentDays = "0" + currentDays;

  return `${currentYear}${currentMonth}${currentDays}`;
};

export const getDate = (minusDay = 0) => {
  let currentDate = new Date();
  if (minusDay > 0) currentDate = new Date(currentDate.setDate(currentDate.getDate() - minusDay));

  const currentYear: string = currentDate.getFullYear() + "";
  const currentMonth: string = currentDate.getMonth() + 1 + "";
  const currentDays: string = currentDate.getDate() + "";

  return [currentYear, currentMonth, currentDays];
};

export const getFormatDate = (dateString: string): string => {
  const date = dateString.split(" ")[0];
  const formatDate = date.split("-").slice(1);

  const [formatMonth, formatDays] = formatDate;

  return `${formatMonth}/${formatDays}`;
};

export const toIncreaseDecreaseNumber = (num: number): string => {
  if (num < 0) num *= -1;

  return toComma(num);
};

export const toComma = (num: number): string => {
  return num.toLocaleString("en-US");
};

export const getSignNumber = (num: number): number => {
  if (num === 0) return 0;

  return num > 0 ? 1 : -1;
};
