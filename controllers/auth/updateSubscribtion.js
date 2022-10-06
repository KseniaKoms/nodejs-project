const { User } = require("../../models/users");

const updateSubscribtion = async (req, res) => {
  const { subscription, password } = req.body;
  const { _id, email } = req.user;

  await User.findByIdAndUpdate(_id, { subscription, password }, { new: true });
  res.json({ email, subscription });
};
module.exports = updateSubscribtion;
