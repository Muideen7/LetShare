import dbClient from '../storage/db';
const bcrypt = require('bcrypt');

class BusinessController {
    static async newBusiness(req, res) {
        //register a new business
        const {
            businessName, website, phoneNumber, city, email, category, password
            } = req.body
        if (!businessName) { res.status(400).json({error: 'Business Name missing'})};
        if (!phoneNumber) {res.status(400).json({error: 'Phone Number missing'})};
        if (!city) {res.status(400).json({ error: 'City missing'})};
        if (!password) {res.status(400).json({error: 'Password missing'})};
        if (!category) {res.status(400).json({error: 'Category missing'})};
        if (!email) {res.status(400).json({error: 'Email missing'})}
        const collection = dbClient.db.collection('Business');
        try {
            const existingBusiness = await collection.findOne({ email })
            if (existingBusiness) {
                res.status(400).json({error: 'Business already exists'})
            } else {
                const passwordHash = await bcrypt.hash(password, 10) // hash password
                const newBusiness = {
                    businessName,
                    website,
                    phoneNumber,
                    city,
                    email,
                    category,
                    password: passwordHash
                }
                await collection.insertOne(newBusiness); // save business in DB
                res.status(201).json({message: 'Business Successfully Created'});
            }
        } catch(err) {
            console.log(err);
        }
    }
}
module.exports = BusinessController
