const { Schema, model, models } = require("mongoose");

const AccountSchema = new Schema({
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
});

const AccountModel = model("accounts", AccountSchema);

models.exports = AccountModel;
