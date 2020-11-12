const bcrypt = require("bcrypt");
const { userModel } = require("../../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const userName = req.body.user_name;
  const password = req.body.password;
  const schema = {
    user_name: "string|empty:false",
    password: "string|min:6",
  };

  const validate = v.validate(req.body, schema);
  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const user = await userModel.findUser(userName);

  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "user not found",
    });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(404).json({
      status: "error",
      message: "user not found",
    });
  }

  return res.status(200).json({
    status: "success",
    data: {
      id: user.id,
      user_name: user.user_name,
      name: user.name,
      role: user.role,
    },
  });
};
