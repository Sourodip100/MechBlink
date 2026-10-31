const mongoose = require('mongoose');

const serviceAreaSchema = new mongoose.Schema({
    pincode: {
        type: Number,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    serviceAvailable: {
        type: Boolean,
        required: true
    },
    services: {
        type: [String],
        required: true
    },
    mechanics: {
        type: [String],
        required: true
    },
    averageResponseTime: {
        type: Number,
        required: true
    },
    emergencyService: {
        type: Boolean,
        required: true
    },
    nightService: {
        type: Boolean,
        required: true
    },
    coverageradius: {
        type: Number,
        required: true
    },
    serviceStats: {
        totalRequests: {
            type: Number,
            required: true
        },
        completedRequests: {
            type: Number,
            required: true
        },
        activeMechanics: {
            type: Number,
            required: true
        },
        averageRating: {
            type: Number,
            required: true
        }
    },
    availability: {
        monday: {
            type: Number, // no of hours available
            required: true
        },
        tuesday: {
            type: Number,
            required: true
        },
        wednesday: {
            type: Number,
            required: true
        },
        thursday: {
            type: Number,
            required: true
        },
        friday: {
            type: Number,
            required: true
        },
        saturday: {
            type: Number,
            required: true
        },
        sunday: {
            type: Number,
            required: true
        }
    }
},
    {
        timestamps: true
    }
);
const ServiceArea = mongoose.model('ServiceArea', serviceAreaSchema, 'serviceAreas');
module.exports = ServiceArea;