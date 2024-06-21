import express, { type Express, Request, Response } from "express";
import { BACKEND } from "@repo/common";

const app: Express = express();

console.log(BACKEND);

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "DFAD",
  });
});

app.listen(process.env.PORT);
