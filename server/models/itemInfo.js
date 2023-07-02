const mongoose = require('mongoose') ;

const itemInfoSchema = new mongoose.Schema({
    _id: {type: mongoose.ObjectId, ref: 'item'},
    description: {type: String},
    category: {type: String},
    characteristics: [{
        itemType: String,
        material: String,
        color: String
    }]

});

module.exports = mongoose.model('itemInfo', itemInfoSchema, 'itemInfo')