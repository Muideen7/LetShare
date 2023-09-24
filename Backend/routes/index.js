/*
    Module that defines the Router middleware to handle each endpoint
*/

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const router = express.Router();
const UserController = require('../models/UserController');
const AuthController = require('../auth/AuthController');
const { verifyToken } = require('../auth/Auth');

router.use(cors());
router.use(express.json());
router.use(cookieParser());

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.get('/users', verifyToken, UserController.getUsers);

module.exports = router;
