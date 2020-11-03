module.exports = (sequelize, DataTypes) => {
  const nojsUserModel = sequelize.define(
    "nojsUserModel",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      nojs: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      site: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      provinsi: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mitra: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ip: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      latitutde: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      longitude: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      id_lvd_vsat: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      id_ping: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      id_batt_volt: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      id_vsat_curr: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      id_bts_curr: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "nojs_users",
      timestamps: true,
    }
  );

  return nojsUserModel;
};
