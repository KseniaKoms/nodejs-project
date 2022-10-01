const getAll = require("./getAll");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const removeContact = require("./removeContact");
const updateById = require("./updateById");
const updateFavorite = require("./updateFavorite");

module.exports = {
  getAll,
  getContactById,
  addContact,
  removeContact,
  updateFavorite,
  updateById,
};
