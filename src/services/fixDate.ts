export const fixDate = (date: string): string => {
  const [year, month, day] = date.split("-");
  const dateFixed = `${day}-${month}-${year}`;

  return dateFixed
};
