/* eslint-disable */
const { sign, verify } = require('jsonwebtoken');
require('dotenv').config();

// create jwt
const createToken = (user) => {
  const accessToken = sign({ id: user._id }, process.env.SECRET);
  return accessToken;
};

// verify jwt
const verifyToken = (req, res, next) => {
  if (req.cookies && req.cookies['access-token']) {
    const accessToken = req.cookies['access-token'];
    if (!accessToken) { res.status(401).json({ error: 'User is not authenticated' }); }
    try {
      const payload = verify(accessToken, process.env.SECRET);
      if (payload) {
        req.authenticated = true;
        req.userId = payload.id // set user id in req object for the next middleware
        console.log('hello')
        next()
      }
    } catch (err) {
      res.status(400).json({ error: err });
    }
  } else {
    // Handle the case where the cookie doesn't exist
    res.status(400).json({ error: 'Cookies not found' });
  }

};

module.exports = { createToken, verifyToken };
