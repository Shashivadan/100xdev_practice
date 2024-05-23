import { Hono } from "hono";

const app = new Hono();

app.use(async function middlewareAuth(c, next) {
  const { req, status, json } = c;

  if (!req.header("Authorization")) {
    status(400);
    return json({
      message: "auth not found",
    });
  }
  await next();
});

app.get("/", async (c) => {
  const body = await c.req.json();
  console.log(body);
  const headerAuth = c.req.header("Authorization");
  console.log("headerAuth", headerAuth);
  console.log(c.req.query("param"));

  return c.text("sdflksdjs");
});

export default app;
