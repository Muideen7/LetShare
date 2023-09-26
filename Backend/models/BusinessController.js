/* eslint-disable */
import dbClient from '../storage/db';

const bcrypt = require('bcryptjs');
const { ObjectId } = require('mongodb');
const salt = bcrypt.genSaltSync(10);

class BusinessController {
  static async newBusiness(req, res) {
    // register a new business
    const {
      businessName, website, phoneNumber, city, email, category, password,
    } = req.body;
    if (!businessName) { res.status(400).json({ error: 'Business Name missing' }); }
    if (!phoneNumber) { res.status(400).json({ error: 'Phone Number missing' }); }
    if (!city) { res.status(400).json({ error: 'City missing' }); }
    if (!password) { res.status(400).json({ error: 'Password missing' }); }
    if (!category) { res.status(400).json({ error: 'Category missing' }); }
    if (!email) { res.status(400).json({ error: 'Email missing' }); }
    const collection = dbClient.db.collection('Business');
    try {
      const existingBusiness = await collection.findOne({ email });
      if (existingBusiness) {
        res.status(400).json({ error: 'Business already exists' });
      } else {
        const passwordHash = await bcrypt.hashSync(password, salt); // hash password
        const newBusiness = {
          businessName,
          website,
          phoneNumber,
          city,
          email,
          category,
          password: passwordHash,
        };
        await collection.insertOne(newBusiness); // save business in DB
        res.status(201).json({ message: 'Business Successfully Created' });
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async getBusiness(req, res) {
    // get a Business
    const businessId = req.ModelId; // get businessId from request object
    try {
      const Business = await dbClient.db.collection('Business').aggregate([
        {
          $match: { _id: new ObjectId(businessId) },
        },
        {
          $project: { password: 0 }, // ignore password in loaded object
        },
      ]).toArray();
      res.status(200).json(Business);
    } catch (err) {
      console.log(err);
    }
  }
}
module.exports = BusinessController;
