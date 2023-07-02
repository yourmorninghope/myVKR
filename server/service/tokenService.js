const jwt = require('jsonwebtoken');
const tokenModel = require('../models/token');

class tokenService{
    generateToken(payload){
        const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET_KEY, {expiresIn: '1s'});
        const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET_KEY, {expiresIn: '30d'});

        return {accessToken, refreshToken};
    }

    async saveToken(userId, refreshToken){
        const tokenData = await tokenModel.findOne({user_id: userId});

        if (tokenData){
            tokenData.token = refreshToken;
            return tokenData.save();
        }

        const token = await tokenModel.create({user_id: userId, token: refreshToken});

        return token; 
    }

    validateAccessToken(token){
        try {
            const userData = jwt.verify(token, process.env.ACCESS_SECRET_KEY);
            return userData;
        } catch (error) {
            return null;
        }
        
    }

    validateRefreshToken(token){
        try {
            const userData = jwt.verify(token, process.env.REFRESH_SECRET_KEY);
            return userData;
        } catch (error) {
            return null;
        }
        
    }

    async removeToken(refreshToken){
        const token = await tokenModel.deleteOne({token: refreshToken});
        return token;
    }

    async findToken(refreshToken){
        const token = await tokenModel.findOne({token: refreshToken});
        return token;
    }

}

module.exports = new tokenService();