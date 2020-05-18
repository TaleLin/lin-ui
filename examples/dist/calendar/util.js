export function getMonthEndDay(year, month) {
  return new Date(year, month, 0).getDate();
}

export function isTimeTemp(data) {
  var reg = /^\d+(\.\d+)?$/
  return reg.test(data)
}

export function getDate(str) {
  if (isTimeTemp(str)) {
    str = parseInt(str)
  }
  str = new Date(str);
  return str
}

export function getDayByOffset(date, number) {
  date = new Date(date);
  date.setDate(date.getDate() + number);
  return date;
}

export function compareMonth(date1, date2) {
  if (!(date1 instanceof Date)) {
    date1 = getDate(date1)
  }

  if (!(date2 instanceof Date)) {
    date2 = getDate(date2)
  }

  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();
  const month1 = date1.getMonth();
  const month2 = date2.getMonth();

  if (year1 === year2) {
    return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
  }

  return year1 > year2 ? 1 : -1;
}

export function compareDay(date1, date2) {
  if (!(date1 instanceof Date)) {
    date1 = getDate(date1);
  }

  if (!(date2 instanceof Date)) {
    date2 = getDate(date2);
  }

  const compareMonthResult = compareMonth(date1, date2);

  if (compareMonthResult === 0) {
    const _date1 = date1.getDate();
    const _date2 = date2.getDate();

    return _date1 === _date2 ? 0 : _date1 > _date2 ? 1 : -1;
  }

  return compareMonthResult;
}
