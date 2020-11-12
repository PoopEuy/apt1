const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ServiceCall extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ServiceCall.belongsTo(models.nojsUserModel, {
        foreignKey: "nojs_id",
        as: "nojs",
      });
    }
  }
  ServiceCall.init(
    {
      nojs_id: DataTypes.INTEGER,
      open_time: DataTypes.STRING,
      closed_time: DataTypes.STRING,
      error: DataTypes.STRING,
      status: DataTypes.STRING,
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
      modelName: "serviceCallModel",
      tableName: "service_calls",
    }
  );
  return ServiceCall;
};
