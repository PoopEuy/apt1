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

module.exports = { now, tsFormater, minusHour, millisToMinutes, dateFormater };
