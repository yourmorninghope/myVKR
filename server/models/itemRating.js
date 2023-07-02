const mongoose = require('mongoose') ;

const itemRatingSchema = new mongoose.Schema({
    _id: {type: mongoose.ObjectId, ref: 'item', required: true},
    rating: [{
        user_id: {type: mongoose.ObjectId, ref: 'user'},
        rate: Number
    }]

});

module.exports = mongoose.model('itemRating', itemRatingSchema, 'itemRating')