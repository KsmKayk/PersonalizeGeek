const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password_hash: String,
  shopping_cart: [String],  
});

module.exports = mongoose.model("User", UserSchema);
