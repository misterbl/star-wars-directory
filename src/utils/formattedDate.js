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
  if (newDate.getDate() === 1) {
    day = `${newDate.getDate()}st`;
  } else if (newDate.getDate() === 2) {
    day = `${newDate.getDate()}nd`;
  } else if (newDate.getDate() === 3) {
    day = `${newDate.getDate()}rd`;
  } else {
    day = `${newDate.getDate()}th`;
  }

  return `${day} ${monthNames[newDate.getMonth()]} ${newDate.getFullYear()}`;
};

export default formattedDate;
