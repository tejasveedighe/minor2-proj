const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
});

// the name here is the name of the collection that will be created in the database

// the collection make the name automatically to plural form
const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
