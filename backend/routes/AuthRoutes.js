const { Router } = require('express');
const jwt = require('jsonwebtoken');
const { createUser, signIn, getHome } = require('../controllers/AuthController');
const router = Router();

router.post('/sign-up', createUser);
router.post('/sign-in', signIn);
router.get('/sign-in', verifyToken, getHome);



function verifyToken(req, res, next) {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(401).send('Access denied');
    console.log('token', token);
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        console.log('verified', verified);
        req.userId = verified.userId;
        next();
    } catch (err) {
        res.status(400).send('Invalid token');
    }
}

module.exports = router;