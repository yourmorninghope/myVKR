const mongoose = require('mongoose') ;

const sellerSummarySchema = new mongoose.Schema({
    _id: {type: mongoose.ObjectId, ref: 'user'},
    categories: [{type: mongoose.ObjectId, ref: 'categories'}],
    rating: Number

});

module.exports =  mongoose.model('sellerSummary', sellerSummarySchema, 'sellerSummary')