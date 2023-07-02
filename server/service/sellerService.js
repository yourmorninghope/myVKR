const User = require('../models/user');
const SellerRating = require('../models/sellerRating');
const SellerInfo = require('../models/sellerInfo');
const SellerSummary = require('../models/sellerSummary');
const Category = require('../models/category');
const tokenService = require('../service/tokenService');


class sellerService{
    async registration(username, description, categories){
        const candidate = await User.findOne({username});
        const isExist = await SellerSummary.findOne({username});

        if (!candidate){
            console.log ('Зарегистрируйте основной аккаунт');
            return;
        } 

        if (isExist){
            console.log('Такой продавец уже есть');
            return;
        }

        const arr = []
        await Promise
            .all(categories.map(name => Category.findOne({name: name},{_id: 1})))
            .then(queries => {
                queries.map(q => arr.push(q._id.toString()))
            })

        const sellerInfo = new SellerInfo({_id: candidate._id, description});
        await sellerInfo.save();
        const sellerSummary = new SellerSummary({_id: candidate._id, categories: arr});
        await sellerSummary.save();
        const sellerRating = new SellerRating({_id: candidate._id});
        await sellerRating.save();

        let payload = {id: candidate._id, email: candidate.email, username};
        const tokens = tokenService.generateToken(payload);
        
        tokenService.saveToken(candidate._id, tokens.refreshToken);
        return {...tokens, payload};
    }

    async getSeller(sellerId){
        const arr = []
        
        const sellerData = await SellerInfo.findOne({_id: sellerId});
        const sellerSummary = await SellerSummary.findOne({_id: sellerId});
        const sellerRating = await SellerRating.findOne({_id: sellerId});

        await Promise
            .all(sellerSummary.categories.map(id => Category.findOne({_id: id},{name: 1})))
            .then(queries => {
                queries.map(q => arr.push(q.name.toString()))
            })

        return {sellerData, sellerSummary, sellerRating, arr};
    }

}

module.exports = new sellerService();