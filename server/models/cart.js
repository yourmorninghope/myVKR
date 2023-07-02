const mongoose = require('mongoose') ;

const cartSchema = new mongoose.Schema({
    user_id: {type: mongoose.ObjectId, ref: 'user', required: true},
    items: [{
        item: {type: mongoose.ObjectId, ref: 'item'},
        count: Number
    }]

});

module.exports = mongoose.model('cart', cartSchema)