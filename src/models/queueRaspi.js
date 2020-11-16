"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QueueRaspi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  QueueRaspi.init(
    {
      name: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      sequelize,
      modelName: "queueRaspiModel",
      tableName: "queue_raspis",
    }
  );
  return QueueRaspi;
};
