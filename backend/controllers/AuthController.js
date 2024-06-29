const User = require("../models/UserModel")
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




module.exports.createUser = async (req, res) => {

    try {
        const { displayName, username, password } = req.body;
        hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            displayName,
            username,
            password: hashedPassword
        });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


module.exports.signIn = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        const token = jwt.sign({ userId: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '15s' });
        res.status(200).json(token);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports.getHome = async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        res.json({ username: user.displayName });
    } catch (err) {
        res.status(500).send('Error fetching homepage');
    }



}
