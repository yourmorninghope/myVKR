const User = require('../models/user');
const Seller = require('../models/sellerSummary');
const SellerInfo = require('../models/sellerInfo');
const SellerRatimng = require('../models/sellerRating');
const bcrypt = require('bcrypt');
const Cart = require('../models/cart');
const tokenService = require('../service/tokenService');



class userService{
    async registration(username, email, password){
        const candidate = await User.findOne({email});
        
        if (candidate){
            console.log ('такой пользователь уже есть');
        } 

        const hashPassword = await bcrypt.hash(password, 5);
        const user = new User({username, email, password: hashPassword});
        await user.save();
        const cart = new Cart({user_id: user._id});
        await cart.save();

        let payload = {id: user._id, email, username};
        const tokens = tokenService.generateToken(payload);
        
        tokenService.saveToken(user._id, tokens.refreshToken);
        return {...tokens, payload};
    }

    async login(username, password){
        let sellerInfo;
        let sellerRating;
        let isSeller = false;
        
        const user = await User.findOne({username: username});
        const seller = await Seller.findOne({_id: user._id});
       
        if (seller) { 
            isSeller = true;
            const sellerInfo = await SellerInfo.findOne({_id: user._id});

            console.log(seller)
        }

        if (!user){
            return console.log('пользователь не найден')
        }

        let checkPassword = bcrypt.compare(password, user.password);

        if (!checkPassword){
            return console.log('неверный пароль')
        }

        let payload = {id: user._id, email: user.email, username: user.username};
        const tokens = tokenService.generateToken(payload);
        
        tokenService.saveToken(user._id, tokens.refreshToken);
        return {...tokens, payload, isSeller};

    }

    async logout(refreshToken){
        const token = tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken){
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDB = await tokenService.findToken(refreshToken);

        if (!userData||!tokenFromDB){
            return 'что-то пошло не так';
        }

        const user = await User.findById(userData.id);

        let payload = {id: user._id, email: user.email};
        const tokens = tokenService.generateToken(payload);
        
        tokenService.saveToken(user._id, tokens.refreshToken);
        return {...tokens, payload};

    }
}

module.exports = new userService();