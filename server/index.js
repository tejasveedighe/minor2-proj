const express = require("express");
const mongoose = require("mongoose");
const app = express();
const UserModel = require("./models/Users");

// to handle the cors policy when connecting the back and front of the app
const cors = require("cors");

// for post request
app.use(express.json());

// for connecting back and front
app.use(cors());

mongoose.connect(
	"mongodb+srv://tejasvee:tejasvee123@cluster0.upghg.mongodb.net/users?retryWrites=true&w=majority"
);

// GET REQUEST BRIDGE
app.get("/getUsers", (req, res) => {
	// to find the users from database and send the data back to the frontend
	// working for users collection and not for user
	UserModel.find({}, (err, result) => {
		if (err) {
			res.json(err);
		} else {
			res.json(result);
		}
	});
});

// POST REQUEST
app.post("/createUser", async (req, res) => {
	// the values are present in the body obj of req
	// the value was added to new users collection in the users database dont know what happened wrong
	const user = req.body;
	const newUser = new UserModel(user);
	await newUser.save();

	// sends the data to the front end in json format
	res.json(user);
});

app.get("/", (req, res) => res.end("Hello"));
app.listen(3001, () => {
	console.log("Server running at 3001");
});
