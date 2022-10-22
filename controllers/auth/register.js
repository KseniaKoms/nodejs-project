const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const {nanoid} = require("nanoid");

const { User } = require("../../models/users");
const { RequestError, sendEmail, verifyEmail } = require("../../helpers");

const register = async (req, res) => {
  const { email, name, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "This email is already registered");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const verificationToken = nanoid();
  const newUser = await User.create({ email, name, password: hashPassword , avatarURL, verificationToken});
  const mail = verifyEmail(email, verificationToken);
  await sendEmail(mail);

  res.status(201).json({
    name: newUser.name,
    email: newUser.email,
    verificationToken: newUser.verificationToken,
  });
};

module.exports = register;
