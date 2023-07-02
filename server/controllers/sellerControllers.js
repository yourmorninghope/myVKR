const sellerService = require('../service/sellerService');
const itemService = require('../service/itemService');

class sellerControllers{

    async registration(req, res){
        const {username, description, categories} = req.body;
        const sellerData = await sellerService.registration(username, description, categories);

        res.cookie('refreshToken', sellerData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
        return res.json(sellerData);
    }

    async getItems(req, res){
        const {sellerId} = req.body;
        const seller = await sellerService.getSeller(sellerId);
        const items = await itemService.getItems(seller.sellerData.items);
        
        res.json({seller, items});
    }
}

module.exports = new sellerControllers();