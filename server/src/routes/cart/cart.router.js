const express = require("express");
const Cart = require("./cart.model");
const User = require("../user/user.model");

const authMiddleware = async (req, res, next) => {
  let token = req.headers.token;

  if(!token) {
    return res.send("Missing token");
  }

  let [id, email, password] = token.split("_#_");
  try {
    let user = await User.findOne({ email});
    if(user){
        if (password === user.password) {
            req.userId = user._id;
            next();
        } else {
        res.status(401).send("Authentication Failure, incorrect password");
        }
    } else {
            res.status(401).send(`User with email: ${email} not found`);
    }
  }catch(e) {
    res.status(404).send(e.message);
  }
};

const app = express.Router();
app.use(authMiddleware);

app.get("/", async (req, res) => {
  try {
    let items = await Cart.find({user: req.userId}).populate(["user", "product"]);
    res.send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.post("/", async (req, res) => {
  try {
      let item = await Cart.create({...req.body, user: req.userId});
      return res.send(item);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = app;