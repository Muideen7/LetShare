/* eslint-disable */
const { sign, verify } = require('jsonwebtoken');
require('dotenv').config();

const createToken = (user) => {
  const accessToken = sign({ username: user.username }, process.env.SECRET);
  return accessToken;
};

const verifyToken = (req, res, next) => {
  if (req.cookies && req.cookies['access-token']) {
    const accessToken = req.cookies['access-token'];
    if (!accessToken) { res.status(400).json({ error: 'User is not authenticated' }); }
    try {
      const validated = verify(accessToken, process.env.SECRET);
      if (validated) {
        req.authenticated = true;
        return next();
      }
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  } else {
    // Handle the case where the cookie doesn't exist
    console.log('Cookies:', req.cookies);
    res.status(400).json({ error: 'Cookies not found' });
  }
 
};

module.exports = { createToken, verifyToken };
