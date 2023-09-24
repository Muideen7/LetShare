/*
    Module that defines the Router middleware to handle each endpoint
*/

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const router = express.Router();
const AuthController = require('../auth/AuthController');
const { verifyToken } = require('../auth/Auth');
import BusinessController from '../models/BusinessController';
import UserController from '../models/UserController';

router.use(cors());
router.use(express.json());
router.use(cookieParser());

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.get('/business', verifyToken, BusinessController.getBusiness)
router.get('/user', verifyToken, UserController.getUser)

module.exports = router;
