const zod = require("zod");

function signinValidater(req, res, next) {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const phone_number = parseInt(req.body.phone_number);

  const Validater = zod.object({
    email: zod.string().email({ message: "Invalid email address" }),
    username: zod.string().min(4),
    password: zod.string().min(6),
    phone_number: zod.number().int().min(1000000000).max(9999999999),
  });

  const response = Validater.safeParse({
    email: email,
    password: password,
    username: username,
    phone_number: phone_number,
  });

  if (!response.success) {
    res.json(response);
  }
  next();
}

module.exports = signinValidater;
