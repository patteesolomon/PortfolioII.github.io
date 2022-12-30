const mongoose = require("mongoose");

// create a new schema
const UserSchema = new mongoose.Schema(
    {
        name: {type: String, required: false},
        email: {type: String, required: false}
    }
);

const UserInfo = mongoose.model("User", UserSchema);

module.exports = UserInfo;