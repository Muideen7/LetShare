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
    const userCollection = dbClient.db.collection('User')
    try {
        // check User collection if email exists
        const existingUser = await userCollection.findOne({ email });
        if (!existingUser) {
            // check Business collection if email exists
            const businessCollection = dbClient.db.collection('Business');
            const existingBusiness = await businessCollection.findOne({ email });
            if (existingBusiness) {
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
                await userCollection.insertOne(newUser) // save user in DB
                res.status(201).json({message: 'User Successfully created'})
            }

        } else {
            res.status(400).json({error: "Email already exists"})
        }
    } catch(err) {
        console.log(err);
    }
  }
  static async getUser(req, res) {
    // get a User
    const UserId = req.ModelId
    try {
        const User = await dbClient.db.collection('User').aggregate([
            {
                $match: { _id: new ObjectId(UserId) }
            },
            {
                $project: {password: 0}
            }
        ]).toArray();
        res.status(200).json(User)
    } catch(err) {
        console.log(err)
    }
  }
}

module.exports = UserController;
