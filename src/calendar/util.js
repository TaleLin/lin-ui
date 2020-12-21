export function getMonthEndDay(year, month) {
  return new Date(year, month, 0).getDate();
}

export function isTimeTemp(data) {
  var reg = /^\d+(\.\d+)?$/;
  return reg.test(data);
}

export function getDate(str) {
  if (isTimeTemp(str)) {
    str = parseInt(str);
  }
  str = new Date(str);
  return str;
}

export function getDayByOffset(date, number) {
  date = new Date(date);
  date.setDate(date.getDate() + number);
  return date;
}

export function compareMonth(date1, date2) {
  if (!(date1 instanceof Date)) {
    date1 = getDate(date1);
  }

  if (!(date2 instanceof Date)) {
    date2 = getDate(date2);
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

export function calcDateNum(date) {
  const day1 = new Date(date[0]).getTime();
  const day2 = new Date(date[1]).getTime();
  return (day2 - day1) / (1000 * 60 * 60 * 24) + 1;
}

export function copyDates(dates) {
  if (Array.isArray(dates)) {
    return dates.map(date => {
      if (date === null) {
        return date;
      }
      return new Date(date);
    });
  }
  return new Date(dates);
}

export function getTime (dates) {
  if (Array.isArray(dates)) {
    return dates.map(date => {
      if (date instanceof Date) {
        return date.getTime();
      }
      return date;
    });
  }
  return (dates instanceof Date ? dates.getTime() : dates);
}

export function formatMonthTitle(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  return `${date.getFullYear()}年${date.getMonth() + 1}月`;
}

export function getMonths(minDate, maxDate) {
  const months = [];
  const cursor = new Date(minDate);
  cursor.setDate(1);
  do {
    months.push(cursor.getTime());
    cursor.setMonth(cursor.getMonth() + 1);
  } while (compareMonth(cursor, maxDate) !== 1);
  return months;
}

