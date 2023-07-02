const mongoose = require('mongoose') ;

const userSchema = new mongoose.Schema({
    image: {type: String},
    name: {type: String},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    subscriptions: [{type: mongoose.ObjectId, ref: 'sellerInfo'}],
    favorites: [{type: mongoose.ObjectId, ref: 'item'}]

});

module.exports =  mongoose.model('user', userSchema)