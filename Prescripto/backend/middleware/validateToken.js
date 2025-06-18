const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
//express-async-handler is used to wrap the asynchronous route handler, ensuring that any errors are caught and passed to the error-handling middleware. This way, you don't need to manually use try-catch blocks in every async route handler.



const validationToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    //.split(" ") should have space btn quotes
    token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).send("user is not authorized");
      }
      req.user = decoded.user;
      next();
    });
    if (!token) {
      res.status(401).send("user is not authorized or token is taken");
    }
  } else {
    res.status(401).send("user is not authorized");
  }
});
module.exports = validationToken;
