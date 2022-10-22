const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const updateSubscribtion = require("./updateSubscribtion");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resendVerify = require("./resendVerify");

module.exports = {
  register,
  login,
  logout,
  getCurrent,
  updateSubscribtion,
  updateAvatar,
  verify,
  resendVerify,
};
