/*
    Module to handle Authentication for business or user,
    login, password change
*/


// import necessary dependencies
const bcrypt = require('bcrypt');
const dbClient = require('../storage/db');
const { createToken } = require('./Auth');
import BusinessController from '../models/BusinessController';
import UserController from '../models/UserController';

class AuthController {
  static async register(req, res) {
    if (!req.body) {
        res.status(400).json({error: 'Missing Form Data'})
    }
    const formData = req.body;
    if (formData.hasOwnProperty('businessName') && formData.hasOwnProperty('category')) {

        BusinessController.newBusiness(req, res) // Business registration
    } else {

        UserController.newUser(req, res) // User registration
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
        // attempt user login
        let collection = dbClient.db.collection('User')
        const User = await collection.findOne({ email });
        if (!User) {
            // attempt business login on User failed login
            collection = dbClient.db.collection('Business');
            const Business = await collection.findOne({ email })
            if (!Business) {
                res.status(404).json({error: 'Email not found'})
            } else {
                const pwdMatch = await bcrypt.compare(password, Business.password)
                if (!pwdMatch) {
                    res.status(401).json({error: 'Incorrect Password'})
                } else {
                    const accessToken = createToken(Business);
                    res.cookie('access-token', accessToken, {
                        maxAge: 60 * 60 * 24 * 30 * 1000,
                        httpOnly: true
                    });
                }
                res.status(200).json({message: 'Business Login Successful'})
            }
        } else {
            // User login failed business login
            const pwdMatch = bcrypt.compare(password, User.password)
                if (!pwdMatch) {
                res.status(401).json({ error: 'Incorrect password' });
                } else {
                const accessToken = createToken(User);
                res.cookie('access-token', accessToken, {
                    maxAge: 60 * 60 * 24 * 30 * 1000,
                    httpOnly: true
                });
                res.status(200).json({ message: 'User Login Successful'});
                }
            }
        } catch(err) {
            console.log(err)
    }
 }
 // implement logout method
}

module.exports = AuthController;
