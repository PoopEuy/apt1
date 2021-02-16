const Excel = require("exceljs");

module.exports = ({ log, site, uptime, sumVolt, v3, date }) => {
  const workbook = new Excel.Workbook();

  const worksheet = workbook.addWorksheet(site);
  const columns = [
    { header: "Date Time", key: "ts", width: 23 },
    { header: "Eh1", key: "eh1", width: 12 },
    { header: "Eh2", key: "eh2", width: 7 },
    { header: "Vsat Curr", key: "vsat_curr", width: 10 },
    { header: "Bts Curr", key: "bts_curr", width: 10 },
    { header: "Batt Volt", key: "batt_volt", width: 10 },
    { header: "Edl1", key: "edl1", width: 10 },
    { header: "Edl2", key: "edl2", width: 10 },
    { header: "Lvd1", key: "lvd1", width: 10 },
    { header: "Lvd2", key: "lvd2", width: 10 },
    { header: "Duration", key: "duration", width: 10 },
    { header: "Real", key: "real", width: 10 },
  ];

  const newColumn = { header: "Eh3", key: "eh3", width: 10 };
  v3 && columns.splice(3, 0, newColumn);

  worksheet.columns = columns;
  worksheet.addRows(log);

  worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      cell.font = {
        size: 12,
      };
      cell.alignment = {
        vertical: "bottom",
        horizontal: "right",
      };
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });
  });

  const array = new Array([], [], []);
  const duration = ["Duration", uptime];
  const battVolt = ["Batt Volt", +sumVolt];
  const val1 = "LOG POWER JOULE STORE PRO",
    val2 = `Site ${site}`,
    val3 = date;
  const fontH = { size: 14, bold: true };
  const alignH = { vertical: "middle", horizontal: "center" };

  const dataHeading = [
    { h: v3 ? "A1:M1" : "A1:L1", c: "A1", val: val1 },
    { h: v3 ? "A2:M2" : "A2:L2", c: "A2", val: val2 },
    { h: v3 ? "A3:M3" : "A3:L3", c: "A3", val: val3 },
  ];

  worksheet.spliceRows(1, 0, ...array, duration, battVolt, []);
  dataHeading.forEach((el) => {
    let cell = worksheet.getCell(el.c);
    worksheet.mergeCells(el.h);
    cell.value = el.val;
    cell.font = fontH;
    cell.alignment = alignH;
  });
  worksheet.getRow(4).font = fontH;
  worksheet.getRow(5).font = fontH;
  worksheet.getRow(7).font = { size: 13, bold: true };
  worksheet.getRow(7).alignment = { vertical: "middle", horizontal: "center" };

  return workbook;
};
