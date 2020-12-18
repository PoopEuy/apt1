const { statusProgramModel, nojsUserModel } = require("../../models");

module.exports = async (req, res) => {
  statusProgramModel
    .findAll({
      include: [
        {
          model: nojsUserModel,
          as: "nojs",
          attributes: ["nojs", "site"],
        },
      ],
    })
    .then((result) => {
      let temp = [];
      result.forEach((el) => {
        temp = [
          ...temp,
          {
            nojs: el.nojs.nojs,
            site: el.nojs.site,
            accumulate_energy_service: el.accumulate_energy_service,
            check_button_service: el.check_button_service,
            handle_canbus_service: el.handle_canbus_service,
            handle_mosfet_service: el.handle_mosfet_service,
            handle_mosfet_timer: el.handle_mosfet_timer,
            handle_relay_service: el.handle_relay_service,
            handle_relay_timer: el.handle_relay_timer,
            keep_alive_dock_service: el.keep_alive_dock_service,
            keep_alive_dock_timer: el.keep_alive_dock_timer,
            mppt_service: el.mppt_service,
            mppt_snmp_service: el.mppt_snmp_service,
            mppt_snmp_timer: el.mppt_snmp_timer,
            store_log_data_service: el.store_log_data_service,
            store_log_data_timer: el.store_log_data_timer,
          },
        ];
      });
      return res.status(200).json({
        status: "success",
        data: temp,
      });
    })
    .catch((err) => {
      return res.status(401).json({
        status: "error",
        message: err,
      });
    });
};
