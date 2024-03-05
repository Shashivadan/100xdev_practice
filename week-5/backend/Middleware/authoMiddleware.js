const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
  const authorization = req.headers.authorization;

  if (!authorization || !authorization.startsWith("Bearer")) {
    return res.status(401).json({
      message: "unauthorized user",
    });
  }

  
  try {
    const token = authorization.split(" ")[1];

    const decode = jwt.verify(token, "sfjakbsf");
    if (!decode) {
      return res.status(401).json({
        message: "unauthorized user",
      });
    }
    console.log(decode);
    // @ts-ignore
    req.userId = decode.id;
    next();
  } catch (error) {
    console.log(error);
  }
}

module.exports = authMiddleware;
