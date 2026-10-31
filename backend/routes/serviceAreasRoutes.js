const express = require('express');
const router = express.Router();
const ServiceArea = require('../models/ServiceArea');
const url = process.env.FRONTEND_URL;

router.get('/:pin', async (req, res) => {
    const pin = req.params.pin;
    console.log("Received request for pin:", pin);
    try {
        const location = await ServiceArea.findOne({ pincode: Number(pin) });
        if (!location) {
            console.log("Location not found for pin:", pin);
            return res.status(404).json({ message: "Location not found" });
        }
        res.json(location);
    } catch (error) {
        res.status(500).json({ message: "Error fetching location", error: error });
    }
})

module.exports = router;