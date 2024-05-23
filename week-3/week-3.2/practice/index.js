const express = require("express");
const jwt = require("jsonwebtoken");

const accountModel = require("./database");
const signinValidater = require("./validater");

const jwtPassword = "shashivadan";
const PORT = 3000;

const app = express();

app.use(express.json());
async function userExist(email) {
  exictingUser = await accountModel.findOne({ email });
  return exictingUser;
}

app.post("/signin", signinValidater, async (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const phone_number = parseInt(req.body.phone_number);

  if (await userExist(email)) {
    return res.status(402).json({
      msg: "user already exist",
    });
  }

  const newAccount = new accountModel({
    email: email,
    password: password,
    username: username,
    phone_number: parseInt(phone_number),
  }).save();

  let token = jwt.sign({ email: email }, jwtPassword);
  res.json({
    token: token,
  });
});

app.get("/users", async (req, res) => {
  try {
    const token = req.headers.authorization;

    const decode = jwt.verify(token, jwtPassword);
    const email = decode.email;

    let allUsers = await accountModel.find({});

    let filteredAllUser = allUsers.filter((user) => {
      if (user.email === email) {
        return false;
      } else {
        return true;
      }
    });

    res.json({
      userData: filteredAllUser,
    });
  } catch (err) {
    if (err) throw err;
  }
});

app.listen(PORT, () => {
  console.log(`server on ${PORT} `);
});
