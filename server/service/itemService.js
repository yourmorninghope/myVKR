const itemModel = require('../models/item');
const itemInfoModel = require('../models/itemInfo');
const itemRatingModel = require('../models/itemRating');
const sellerInfoModel = require('../models/sellerInfo');

class itemService{
    async saveItem(data, sellerId){
    
        const {image, name, price, category, itemType, material, color, description} = data;

        const item = new itemModel({image, name, price});
        const itemData = await item.save();

        const characteristics = {itemType, material, color}
        const itemInfo = new itemInfoModel({_id: itemData._id, description, category, characteristics});
        await itemInfo.save();

        const itemRating = new itemRatingModel({_id: itemData._id});
        itemRating.save();

        const seller = await sellerInfoModel.findOne({_id: sellerId});
        seller.items.push(itemData._id);
        seller.save();
        return 
    }

    async getItems(itemsId){
        const arr = []
        await Promise
            .all(itemsId.map(id => itemModel.findOne({_id: id})))
            .then(queries => {
                queries.map(q => arr.push(q))
            })
        // console.log(arr);
        return arr;
    }
}

module.exports = new itemService();
