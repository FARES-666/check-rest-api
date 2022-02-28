const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
PORT = process.env.PORT || 5000;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is runing on PORT ${PORT}`)
);
require("dotenv").config({ path: "./config/.env" });
const connectDb = require("./config/connectDb");
connectDb();
const User = require("./model/user");
app.use(express.json());
app.post("/user/add", async (req, res) => {
  const { name, email, phone } = req.body;
  const newUser = new User({ name, email, phone });
  try {
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    res.send(error.message);
  }
});
//all users
app.get("/users/get", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.send(error.message);
  }
});
//one user
app.get("/user/get/:id", async (req, res) => {
  try {
    const oneUser = await User.findById(req.params.id);
    res.send(oneUser);
  } catch (error) {
    res.send(error.message);
  }
});
app.delete("/user/delete/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.send("good bye");
  } catch (error) {
    res.send(error.message);
  }
});
app.put("/user/put/:id", async (req, res) => {
  try {
    const editedUser = await User.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true },
      res.send(editedUser)
    );
  } catch (error) {
    res.send(error.message);
  }
});
