/*
    Module that defines the Router middleware to handle each endpoint
*/
/* eslint-disable */

import BusinessController from '../models/BusinessController';
import UserController from '../models/UserController';
import FileController from '../models/FileController';
import AuthController from '../auth/AuthController';

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const router = express.Router();
const { verifyToken } = require('../auth/Auth');

router.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["POST, GET"],
        credentials: true,
    }
));
router.use(express.json());
router.use(cookieParser());

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.get('/business', verifyToken, BusinessController.getBusiness);
router.post('/files', verifyToken, FileController.postFile);
router.get('/user', verifyToken, UserController.getUser);


export default router;
