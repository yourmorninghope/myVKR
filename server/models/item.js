const mongoose = require('mongoose') ;

const itemSchema = new mongoose.Schema({
    image: {type: String, required: true},
    name: {
        require: true,
        type: String,
        unique: true
    },
    price: Number,
    rating: {type: mongoose.ObjectId, ref: 'itemRating'}

});

module.exports = mongoose.model('item', itemSchema)