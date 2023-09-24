/*
    User Api handler
*/
// const dbClient = require('../storage/db');
import verifyToken from '../auth/Auth';
import dbClient from '../storage/db';
const { ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');

class UserController {
  // methods for UserController used as callback for router middleware

  static async newUser(req, res) {
    // register a user
    const { firstName, lastName, phoneNumber, email, password} = req.body
    if (!firstName) { res.status(400).json({error: 'First Name missing'})};
    if(!lastName) { res.status(400).json({error: 'Last Name missing'})};
    if (!phoneNumber) {res.status(400).json({error: 'Phone Number missing'})}
    if (!email) { res.status(400).json({error: 'Email missing'})}
    if (!password) {res.status(400).json({error: 'Password missing'})}
    const collection = dbClient.db.collection('User')
    try {
        const existingUser = await collection.findOne({ email });
        if (existingUser) {
            res.status(400).json({message: 'Email already exists'})
        } else {
            const passwordHash = await bcrypt.hash(password, 10); // hash user password
            const newUser = {
                firstName,
                lastName,
                password: passwordHash,
                email,
                phoneNumber
            }
            await collection.insertOne({ newUser }) // save user in DB
            res.status(201).json({message: 'User Successfully created'})
       }
    } catch(err) {
        console.log(err);
    }
  }
}

module.exports = UserController;
