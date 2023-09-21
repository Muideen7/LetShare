/*
    Module that defines the Router middleware to handle each endpoint
*/
import UserController from '../models/UserController';
import AuthController from '../auth/AuthController';

const express = require('express');
const cors = require('cors');
const router = express.Router()

// use cors for cross origin sharing
router.use(cors())
router.use(express.json()) // for parsing application/json content type

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', UserController.getUser);

export default router;
