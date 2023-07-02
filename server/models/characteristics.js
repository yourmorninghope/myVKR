const mongoose = require('mongoose') ;

const characteristicSchema = new mongoose.Schema({
    name:[{
        name: String,
        category: [{type: mongoose.ObjectId, ref: 'category'}]
    }]

});

module.exports = mongoose.model('cart', characteristicSchema)