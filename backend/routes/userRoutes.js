const express = require('express');
const router = express.Router();
const { setToken, getToken } = require('../middlewares/userAuth');
const User = require('../models/User');
const url = process.env.FRONTEND_URL;

router.post('/login', async (req, res) => {
    try {
        const { userId, password } = req.body;
        console.log(userId, password);
        
        const user = await User.findOne({ userId });
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        console.log(user.userId);
        console.log(user.password);
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        setToken(res, user._id);
        res.redirect(url + '/dashboard');

    }
    catch (err) {
        console.log(err);
        res.redirect(url + '/loginIntf');
    }

});

router.post('/register', (req, res) => {
    // Handle register logic here

});

module.exports = router;