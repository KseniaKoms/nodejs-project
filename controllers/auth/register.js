const bcrypt = require("bcryptjs");
const { User } = require("../../models/users");
const { RequestError } = require("../../helpers");

const register = async (req, res) => {
  const { email, name, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "This email is already registered");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ email, name, password: hashPassword });
  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
  });
};

module.exports = register;
