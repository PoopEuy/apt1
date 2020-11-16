const hexToBin = require("./hexToBin");

const formaterNoc = (data) => {
  const dockActive = hexToBin(data.dock_active);
  return {
    ts: data.ts,
    batt_volt: data.batt_volt,
    dock_active: dockActive.bin,
    pms: dockActive.on,
    edl1: data.energy.edl1,
    edl2: data.energy.edl2,
    eh1: data.energy.eh1,
    eh2: data.energy.eh2,
    eh3: data.energy.eh3,
  };
};

const formaterNocError = (ts) => {
  return {
    ts: ts,
    batt_volt: null,
    dock_active: null,
    pms: null,
    edl1: null,
    edl2: null,
    eh1: null,
    eh2: null,
    eh3: null,
  };
};

const nocDataChart = (now, next) => {
  return {
    ts: now.ts,
    batt_volt: now.batt_volt,
    dock_active: now.dock_active,
    pms: now.pms,
    edl1: now.edl1 - next.edl1,
    edl2: now.edl2 - next.edl2,
    eh1: now.eh1 - next.eh1,
    eh2: now.eh2 - next.eh2,
    eh3: now.eh3 - next.eh3,
  };
};

module.exports = { formaterNoc, formaterNocError, nocDataChart };
