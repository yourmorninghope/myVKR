const mongoose = require('mongoose') ;

const sellerInfoSchema = new mongoose.Schema({
    _id: {type: mongoose.ObjectId, ref: 'user', required: true},
    description: {type: String, required: true},
    items: [{type: mongoose.ObjectId, ref: 'item'}]

});

module.exports = mongoose.model('sellerInfo', sellerInfoSchema, 'sellerInfo')