/* eslint-disable */
/*
    User Api handler
*/
// import verifyToken from '../auth/Auth';
// import dbClient from '../storage/db';

const { ObjectId } = require('mongodb');
const bcrypt = require('bcryptjs');
const dbClient = require('../storage/db');

const salt = bcrypt.genSaltSync(10);

class UserController {
  // methods for UserController used as callback for router middleware

  static async newUser(req, res) {
    // register a user
    const {
      firstName, lastName, phoneNumber, email, password,
    } = req.body;
    if (!firstName) { res.status(400).json({ error: 'First Name missing' }); }
    if (!lastName) { res.status(400).json({ error: 'Last Name missing' }); }
    if (!phoneNumber) { res.status(400).json({ error: 'Phone Number missing' }); }
    if (!email) { res.status(400).json({ error: 'Email missing' }); }
    if (!password) { res.status(400).json({ error: 'Password missing' }); }
    const collection = dbClient.db.collection('User');
    try {
      const existingUser = await collection.findOne({ email });
      if (existingUser) {
        res.status(400).json({ message: 'Email already exists' });
      } else {
        const passwordHash = await bcrypt.hashSync(password, salt); // hash user password
        const newUser = {
          firstName,
          lastName,
          password: passwordHash,
          email,
          phoneNumber,
        };
        await collection.insertOne(newUser); // save user in DB
        res.status(201).json({ message: 'User Successfully created' });
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async getUser(req, res) {
    // get a User
    const UserId = req.ModelId;
    try {
      const User = await dbClient.db.collection('User').aggregate([
        {
          $match: { _id: new ObjectId(UserId) },
        },
        {
          $project: { password: 0 },
        },
      ]).toArray();
      res.status(200).json(User);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = UserController;
