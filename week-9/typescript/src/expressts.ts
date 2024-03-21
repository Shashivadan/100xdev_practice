import express from "express";

const app = express();

enum codes {
  OK = 200,
  Created = 201,
  Accepted = 202,
  NoContent = 204,

  // Redirection messages
  MovedPermanently = 301,
  Found = 302,
  SeeOther = 303,
  NotModified = 304,
  TemporaryRedirect = 307,
  PermanentRedirect = 308,

  // Client error responses
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  Conflict = 409,
  Gone = 410,
}

app.get("/", (req, res) => {
  return res.status(codes.OK).json({
    message: "stauts code is 200",
  });
});

app.listen(3000);
