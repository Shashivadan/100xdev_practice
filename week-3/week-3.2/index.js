const express = require("express");

const z = require("zod");

const app = express();

const safeValudater = z.object({
  email: z.string().email(),
  password: z.string().max(5),
});

app.get("/", function (req, res) {
  let response = safeValudater.safeParse({
    email: req.headers.email,
    password: req.headers.password,
  });

  if (!response.success) {
    res.json(response);
  }

  res.status(200).json(response);
});

app.use((err, req, res, next) => {
  res.json({
    error: err,
  });
});

app.listen(3000);
