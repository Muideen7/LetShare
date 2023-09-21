const { sign, verify } = require("jsonwebtoken");
require('dotenv').config();

const createToken = (user) => {
  const accessToken = sign({ username: user.username }, process.env.SECRET);
  return accessToken;
};

const verifyToken = (req, res, next) => {
  const accessToken = req.cookies["access-token"];
  if (!accessToken)
    res.status(400).json({ error: "User is not authenticated" });
  try {
   const validated = verify(accessToken, process.env.SECRET)
   if(validated){
    req.authenticated = true;
    return next();
   }
  } catch (err) {
    return res.status(400).json({error: err});
  }
};

module.exports = { createToken, verifyToken };
