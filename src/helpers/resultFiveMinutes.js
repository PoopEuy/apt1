const {
  formaterNoc,
  formaterNocError,
  nocDataChart,
} = require("./dataFormaterNOC");

const { millisToMinutes, dateFormater } = require("./dateTime");

const resultfiveMinutes = (data) => {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    const res = formaterNoc(data[i]);
    const resNext = data[i + 1] ? formaterNoc(data[i + 1]) : "";
    const tempTs = data[i + 1] ? data[i + 1].ts : res.ts;
    const newData = nocDataChart(res, resNext);
    const timeNext = new Date(tempTs);
    const timeNow = new Date(res.ts);
    let minutes = millisToMinutes(timeNow - timeNext);
    if (minutes == 0) {
      if (res.batt_volt) {
        result.push(newData);
      } else {
        result.push(resNext);
      }
    } else if (minutes >= 3 && minutes <= 7) {
      result.push(newData);
    } else {
      result.push(newData);
      while (minutes >= 8) {
        timeNow.setMinutes(timeNow.getMinutes() - 5);
        result.push(formaterNocError(dateFormater(timeNow)));
        minutes = millisToMinutes(timeNow - timeNext);
      }
    }
  }
  result.pop();
  return result.slice(0, 36);
};

module.exports = resultfiveMinutes;
