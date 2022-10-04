const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSaveErrors } = require("../middlewares");

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: String,
});

userSchema.post("save", handleSaveErrors);

const addSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
  subscription: Joi.string().required(),
});

const schemas = {
  addSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
