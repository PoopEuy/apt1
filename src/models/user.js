"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    static async findUser(user_name) {
      return await User.findOne({
        where: { user_name },
      })
        .then((e) => e)
        .catch((err) => err);
    }
  }
  User.init(
    {
      user_name: DataTypes.STRING,
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
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
      modelName: "userModel",
      tableName: "users",
    }
  );
  return User;
};
