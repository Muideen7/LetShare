/* eslint-disable */
/*
    Module to handle Authentication for business or user,
    login, password change
*/


// import necessary dependencies
const bcrypt = require('bcrypt');
const dbClient = require('../storage/db');
const { createToken } = require('../Auth');

class AuthController {
  static async register(req, res) {
    const { username, email, password } = req.body;
    const collection = dbClient.db.collection('Users');
    const existUser = await collection.findOne({ username: username });
    bcrypt.hash(password, 10).then((_hash) =>{
        if(existUser){
            res.status(400).json({error: 'Username already exist'})
        }
        if(!existUser){
            const newUser = {
                username: username,
                email: email,
                password: _hash
            }
            collection.insertOne(newUser);
            res.json({ message: 'New User Successfully Registered' }).status(200);
        }
    });
   
  }

  static async login(req, res) {
    const { username, password } = req.body;
    const collection = dbClient.db.collection('Users')
    const dbUser = await collection.findOne({ username: username });
    if (!dbUser) {
      res.status(400).json({ error: 'Username doesnt exist' });
    }
    if (dbUser) {
      bcrypt.compare(password, dbUser.password).then((match) => {
        if (!match) {
          res.status(400).json({ error: 'Wrong password' });
        } else {
          const accessToken = createToken(dbUser);
          res.cookie('access-token', accessToken, {
            maxAge: 60 * 60 * 24 * 30 * 1000,
            httpOnly: true
          });
          res.json({ message: 'You are already logged in'});
        }
      });
    }
  }
}

module.exports = AuthController;
