const bcrypt = require("bcrypt");
const { userModel } = require("../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const userName = req.body.user_name;
  const name = req.body.name;
  const role = req.body.role || "user";

  const schema = {
    user_name: "string|empty:false",
    name: "string|empty:false",
    password: "string|min:6",
    role: "string|optional",
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const user = await userModel.findOne({
    where: { user_name: userName },
  });
  if (user) {
    return res.status(409).json({
      status: "error",
      message: "User already exist",
    });
  }

  const password = await bcrypt.hash(req.body.password, 10);
  const data = {
    password,
    user_name: userName,
    name,
    role,
  };

  const createdUser = await userModel.create(data);
  return res.status(201).json({
    status: "success",
    data: {
      id: createdUser.id,
    },
  });
};
