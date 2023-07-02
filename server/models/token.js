const mongoose = require('mongoose') ;

const tokenSchema = new mongoose.Schema({
    user_id: {type: mongoose.ObjectId, ref: 'user', required: true},
    token: {type: String, required: true}
});

module.exports = mongoose.model('token', tokenSchema)