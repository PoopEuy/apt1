const pad = (n) => (n < 10 ? `0${n}` : n);

const dateFormater = (date) => {
  const d = new Date(date);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
};

const now = () => {
  const d = new Date();
  return dateFormater(d);
};

const minusHour = (n) => {
  let minus = new Date();
  minus.setHours(minus.getHours() - n);
  return dateFormater(minus);
};

const minusMinutes = (n) => {
  let minus = new Date();
  minus.setHours(minus.getHours() - n);
  return dateFormater(minus);
};

const millisToMinutes = (millis) => {
  return Math.floor(millis / 60000);
};

const tsFormater = (n) => {
  return `${n.slice(0, 4)}-${n.slice(4, 6)}-${n.slice(6, 8)} ${n.slice(
    9,
    11
  )}:${n.slice(11, 13)}:${n.slice(13, 15)}`;
};
const millisToSec = (ts1, ts2) => {
  const date1 = new Date(ts1);
  const date2 = new Date(ts2);
  return (date2 - date1) / 1000;
};

const secToString = (sec) => {
  let msec = sec;
  let day = Math.floor(msec / 60 / 60 / 24);
  msec -= day * 60 * 60 * 24;
  let hh = Math.floor(msec / 60 / 60);
  msec -= hh * 60 * 60;
  let mm = Math.floor(msec / 60);
  msec -= mm * 60;
  let ss = Math.floor(msec);

  return day > 0
    ? `${pad(day)}d ${pad(hh)}h ${pad(mm)}m ${pad(ss)}s`
    : `${pad(hh)}h ${pad(mm)}m ${pad(ss)}s`;
};

const monthFormater = () => {
  const month = [
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
    "December",
  ];
  const date = new Date("2020-12-01 00:00:00");
  return `${month[date.getMonth()]} ${date.getFullYear()}`;
};

module.exports = {
  now,
  tsFormater,
  minusHour,
  millisToMinutes,
  dateFormater,
  millisToSec,
  secToString,
  monthFormater,
};
