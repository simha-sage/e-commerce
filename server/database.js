import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
app.use(express.json());
dotenv.config();
app.use(cors({ origin: "http://localhost:1234" }));
try {
  await mongoose.connect(process.env.CONNECTION_STRING);
  console.log("connected DB");
  app.listen(5000, () => {
    console.log("listensing at 5000");
  });
} catch (e) {
  console.error(e);
}

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, maxlength: 100 },
  password: { type: String, required: true, maxlength: 100, minlength: 6 },
});
const User = mongoose.model("users", userSchema);

app.post("/userSignUp", async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    await newUser.save();
    res.send({ message: "User added sucessfully" });
  } catch (error) {
    console.error(error);
    if (error.name === "ValidationError") {
      res.status(400).send({ message: "invalid input" });
    } else {
      res.status(500).send({ messaage: "internal server error" });
    }
  }
});

app.post("/userSignIn", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.send({ message: "Unsucessful" });
  }
  res.json({ message: "Login successful" });
});

const sellerSchema = new mongoose.Schema({
  email: { type: String, required: true, maxlength: 100 },
  password: { type: String, required: true, maxlength: 100, minlength: 6 },
});
const Seller = mongoose.model("sellers", sellerSchema);

app.post("/sellerSignUp", async (req, res) => {
  try {
    const { email, password } = req.body;
    const newSeller = new Seller({ email, password });
    await newSeller.save();
    res.send({ message: "Seller added sucessfully" });
  } catch (error) {
    res.status(400).send({ message: "invalid input" });
  }
});

app.post("/sellerSignIn", async (req, res) => {
  const { email, password } = req.body;
  const seller = await Seller.findOne({ email });
  if (!seller || seller.password !== password) {
    return res.send({ message: "Unsucessful" });
  }
  res.json({ message: "Login successful" });
});

const munnaschema = new mongoose.Schema({
  order: [String],
});
const usermunna = mongoose.model("usermunna", munnaschema);
app.get("/usermunna", async (req, res) => {
  try {
    const data = await usermunna.find();
    res.json(data[0].order);
  } catch (e) {
    res.status(500).json({ err: "failed to fetch" });
  }
});
