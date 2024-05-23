// const express = require("express");
const zod = require("zod");

// const app = express();

// app.use(express.json());

// const schema = zod.string().min(3);

// app.get("/names", (req, res) => {
//   let name = "shashivadan";
//   let names = schema.safeParse(name);
//   // console.log(names);
//   //   console.log(name);
//   res.json(name);
// });

// app.listen(3000);

let ste = "shashivadan";

const schema = zod.string();

console.log(schema.safeParse(ste));
