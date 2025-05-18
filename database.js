import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
app.use(express.json());
dotenv.config();
app.use(cors({ origin: "http://localhost:1234" }));
try {
  await mongoose.connect(process.env.connection_string);
  console.log("connected DB");
  app.listen(5000, () => {
    console.log("listensing at 5000");
  });
} catch (e) {
  console.error(e);
}

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const User = mongoose.model("users", userSchema);

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  await newUser.save();
  res.send({ message: "User added sucessfully" });
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.send({ message: "Unsucessful" });
  }
  res.json({ message: "Login successful" });
});
