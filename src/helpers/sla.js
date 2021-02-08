const { millisToSec, secToString } = require("./dateTime");
const hexToBin = require("./hexToBin");
const group = require("./group");

const formaterSla = (data) => {
  const dockActive = hexToBin(data.dock_active) || null;
  return {
    ts: data.ts,
    batt_volt: data.batt_volt,
    pms: dockActive.on,
    edl1: data.energy.edl1,
    edl2: data.energy.edl2,
    eh1: data.energy.eh1 < 0 ? 0 : data.energy.eh1,
    eh2: data.energy.eh2 < 0 ? 0 : data.energy.eh2,
    eh3: data.energy.eh3,
    vsat_curr: data.load1,
    bts_curr: data.load2,
  };
};

const average = (arr, param, fix = 0) => {
  return (
    arr.map((val) => val[param]).reduce((acc, val) => acc + val, 0) / arr.length
  ).toFixed(fix);
};

const sum = (arr, param, fix = 0) => {
  return arr
    .map((val) => val[param])
    .reduce((acc, val) => acc + val, 0)
    .toFixed(fix);
};

const dataMaping = (datas, date) => {
  let uptime = 0;
  let result = [];
  let totalDateSec = millisToSec(date.start, date.end);
  for (let i = 0; i < datas.length; i++) {
    let res = formaterSla(datas[i]);
    const tempTs = datas[i + 1] ? datas[i + 1].ts : res.ts;
    const second = millisToSec(res.ts, tempTs);
    uptime += second;
    res = { ...res, duration: second > 300 ? 300 : second, real: second };
    result.push(res);
  }
  const uptimePercent = ((uptime / totalDateSec) * 100).toFixed(2);
  const avg = {
    up_time: secToString(uptime),
    unknown_time: secToString(totalDateSec - uptime),
    up_persentase: `${uptimePercent}%`,
    unknown_persentase: `${(100 - uptimePercent).toFixed(2)}%`,
    eh1: sum(result, "eh1"),
    eh2: sum(result, "eh2"),
    eh3: sum(result, "eh3"),
    batt_volt: average(result, "batt_volt", 2),
    edl1: sum(result, "edl1"),
    edl2: sum(result, "edl2"),
    vsat_curr: average(result, "vsat_curr", 2),
    bts_curr: average(result, "bts_curr", 2),
    duration: uptime,
    secend: totalDateSec,
  };
  return { avg, log: result, duration: uptime };
};

const sla = (datas, date) => {
  return dataMaping(datas, date);
};

const sla2 = (datas, date, nojs) => {
  const data = dataMaping(datas, date);
  const fiveMinutestoDaily = group(data.log);
  const dailys = [];
  fiveMinutestoDaily.forEach((log) => {
    const duration = sum(log.data, "duration");
    const newData = {
      nojs: nojs.nojs,
      site: nojs.site,
      date: log.date,
      up_time: secToString(duration),
      batt_volt: average(log.data, "batt_volt", 2),
      vsat_curr: average(log.data, "vsat_curr", 2),
      bts_curr: average(log.data, "bts_curr", 2),
      eh1: sum(log.data, "eh1"),
      eh2: sum(log.data, "eh2"),
      eh3: sum(log.data, "eh3"),
      edl1: sum(log.data, "edl1"),
      edl2: sum(log.data, "edl2"),
      // duration,
    };
    dailys.push(newData);
  });
  return dailys;
};

module.exports = { sla, sla2 };
