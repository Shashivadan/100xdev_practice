const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.string();

const schema1 = zod.object({
  email: zod.string().email(),
  password: zod.string().password(),
});

app.use(express.json());

app.post("/health-checkup", function (req, res) {
  // kidneys = [1, 2]
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);

  //   if (!response.success) {
  //     res.json({
  //       msg: "invalid input",
  //     });
  //   }
  res.send({
    response,
  });
});

app.listen(3000);
