const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const formattedDate = date => {
  const newDate = new Date(date);
  let day;
  const getDate = newDate.getDate();
  const lastDigit = getDate
    .toString()
    .split("")
    .pop();

  if (lastDigit === "1") {
    day = `${getDate}st`;
  } else if (lastDigit === "2") {
    day = `${getDate}nd`;
  } else if (lastDigit === "3") {
    day = `${getDate}rd`;
  } else {
    day = `${getDate}th`;
  }

  return `${day} ${monthNames[newDate.getMonth()]} ${newDate.getFullYear()}`;
};

export default formattedDate;
