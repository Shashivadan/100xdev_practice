const Users = require("../models/users.model");
const jwt = require("jsonwebtoken");
// @ts-ignore
// const JWT_SCERAT = require("../.env");
const zod = require("zod");

const signUpValidation = zod.object({
  username: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
});


async function signUp(req, res) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const validator = signUpValidation.safeParse({
    username: username,
    email: email,
    password: password,
  });

  if (!validator.success) {
    res.status(401).json({
      massage: "send correct information",
      err: validator,
    });
    return;
  }

  const existingUser = await Users.findOne({ email: email });
  // console.log(existingUser);

  if (existingUser) {
    res.status(403).json({
      massage: "user already exist",
    });
    return;
  }

  const user = await Users.create({
    username: username,
    email: email,
    password: password,
  });

  if (!user) {
    res.status(202).json({
      massage: "new not user create",
      user: user,
    });
    return;
  }

  try {
    const newtoken = user._id;

    const token = jwt.sign({ id: newtoken }, "sfjakbsf");

    if (!token) {
      res.status(401).json({
        token: "token not created",
      });
      return;
    }

    res.status(200).json({
      message: "token as created",
      token: token,
    });
  } catch (err) {
    console.log(err);
  }
}

const signInValuator = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

async function signIn(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const validator = signInValuator.safeParse({
    email: email,
    password: password,
  });

  if (!validator.success) {
    res.status(401).json({
      massage: "send correct information",
    });
  }

  const user = await Users.findOne({ email: email, password: password });

  if (!user) {
    res.status(401).json({
      massage: "incorrect password or email",
    });
  }

  try {
    // @ts-ignore
    const userId = user._id;

    const token = jwt.sign({ id: userId }, "sfjakbsf");

    if (!token) {
      res.status(401).json({
        token: "token not created",
      });
      return;
    }
    res.status(200).json({
      message: "token as created",
      token: token,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  signUp,
  signIn,
};
