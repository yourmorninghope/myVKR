const mongoose = require('mongoose') ;

const sellerRatingSchema = new mongoose.Schema({
    _id: {type: mongoose.ObjectId, ref: 'sellerSummary', required: true},
    rating: [{
        user_id: {type: mongoose.ObjectId, ref: 'user'},
        rate: Number
    }]

});

module.exports = mongoose.model('sellerRating', sellerRatingSchema, 'sellerRating')