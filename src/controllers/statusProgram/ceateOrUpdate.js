const { statusProgramModel } = require("../../models");

module.exports = async (req, res) => {
  const {
    nojs_id,
    accumulate_energy_service,
    check_button_service,
    handle_canbus_service,
    handle_mosfet_service,
    handle_mosfet_timer,
    handle_relay_service,
    handle_relay_timer,
    keep_alive_dock_service,
    keep_alive_dock_timer,
    mppt_service,
    mppt_snmp_service,
    mppt_snmp_timer,
    store_log_data_service,
    store_log_data_timer,
  } = req.body;

  const nojs = await statusProgramModel.findOne({
    where: { nojs_id },
  });

  if (nojs) {
    await nojs.update({
      nojs_id,
      accumulate_energy_service,
      check_button_service,
      handle_canbus_service,
      handle_mosfet_service,
      handle_mosfet_timer,
      handle_relay_service,
      handle_relay_timer,
      keep_alive_dock_service,
      keep_alive_dock_timer,
      mppt_service,
      mppt_snmp_service,
      mppt_snmp_timer,
      store_log_data_service,
      store_log_data_timer,
    });
    return res.status(202).json({
      status: "success",
      message: "data update",
    });
  }

  await statusProgramModel.create({
    nojs_id,
    accumulate_energy_service,
    check_button_service,
    handle_canbus_service,
    handle_mosfet_service,
    handle_mosfet_timer,
    handle_relay_service,
    handle_relay_timer,
    keep_alive_dock_service,
    keep_alive_dock_timer,
    mppt_service,
    mppt_snmp_service,
    mppt_snmp_timer,
    store_log_data_service,
    store_log_data_timer,
  });

  return res.status(201).json({
    status: "success",
    message: "data Created",
  });
};
