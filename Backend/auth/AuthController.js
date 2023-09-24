/* eslint-disable */
/*
    Module to handle Authentication for business or user,
    login, password change
*/


// import necessary dependencies
const bcrypt = require('bcrypt');
const dbClient = require('../storage/db');
const { createToken } = require('./Auth');

class AuthController {
  static async register(req, res) {
    const { first_name, last_name, email, password } = req.body;
    if (!first_name) {
        res.status(400).json({error: 'first name missing'})
    }
    if (!last_name) {
        res.status(400).json({error: 'last name missing'})
    }
    if (!email) {
        res.status(400).json({error: 'email missing'})
    }
    if(!password) {
        res.status(400).json({error: 'password missing'})
    }

    const collection = dbClient.db.collection('Users');
    try {
        const existUser = await collection.findOne({ email });
        bcrypt.hash(password, 10).then((_hash) => {
            if(existUser){
                res.status(400).json({error: 'Email already exists'})
            }
            if(!existUser) {
                const newUser = {
                    first_name,
                    last_name,
                    email,
                    password: _hash
                }
                collection.insertOne(newUser);
                res.json({ message: 'Signup Sucessful' }).status(200);
            }
        });

    } catch(err) {
        req.status(400).json({error: err})
    }
 }

  static async login(req, res) {
  if (!req.body) { res.status(400).json({ error: 'No data input'}) }
    const { email, password } = req.body;
    if (!email) {
        res.status(400).json({error: 'email missing'})
    }
    if(!password) {
        res.status(400).json({error: 'password missing'})
    }
    try {
        const collection = dbClient.db.collection('Users')
        const User = await collection.findOne({ email });
        if (!User) {
        res.status(404).json({ error: 'Email doesn\'t exist' });
        }
        if (User) {
        bcrypt.compare(password, User.password).then((match) => {
            if (!match) {
            res.status(401).json({ error: 'Wrong password' });
            } else {
            const accessToken = createToken(User);
            res.cookie('access-token', accessToken, {
                maxAge: 60 * 60 * 24 * 30 * 1000,
                httpOnly: true
            });
            res.status(200).json({ message: 'Login Successful'});
            }
        });
        }
    } catch(err) {
        console.log(err)
    }
 }
 // implement logout method
}

module.exports = AuthController;
