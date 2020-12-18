"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class statusProgram extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.nojsUserModel, {
        foreignKey: "nojs_id",
        as: "nojs",
      });
    }
  }
  statusProgram.init(
    {
      nojs_id: DataTypes.INTEGER,
      accumulate_energy_service: DataTypes.STRING,
      check_button_service: DataTypes.STRING,
      handle_canbus_service: DataTypes.STRING,
      handle_mosfet_service: DataTypes.STRING,
      handle_mosfet_timer: DataTypes.STRING,
      handle_relay_service: DataTypes.STRING,
      handle_relay_timer: DataTypes.STRING,
      keep_alive_dock_service: DataTypes.STRING,
      keep_alive_dock_timer: DataTypes.STRING,
      mppt_service: DataTypes.STRING,
      mppt_snmp_service: DataTypes.STRING,
      mppt_snmp_timer: DataTypes.STRING,
      store_log_data_service: DataTypes.STRING,
      store_log_data_timer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "statusProgramModel",
      tableName: "status_programs",
    }
  );
  return statusProgram;
};
