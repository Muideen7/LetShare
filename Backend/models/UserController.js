/*
    User Api handler
*/
// const dbClient = require('../storage/db');
import verifyToken from '../auth/Auth';
import dbClient from '../storage/db';
const { ObjectId } = require('mongodb');

class UserController {
  // methods for UserController used as callback for router middleware

  static async getUsers(req, res) {
    // get userId from verifyToken payload
    try {
        const collection = dbClient.db.collection('Users')
        const User = await collection.aggregate([
            {
                $match: { _id: new ObjectId(req.userId) }
            },
            {
                $project: {
                    password: 0 // omit password from loaded details
                }
            }

            ]).toArray();
        res.status(200).json(User);
    } catch(err) {
        console.log(err)
    }
  }
}

module.exports = UserController;
