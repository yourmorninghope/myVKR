const itemService = require('../service/itemService');

class itemControllers{
    async saveItem(req, res){
        const {item, sellerId} = req.body;
        await itemService.saveItem(item, sellerId);
       
        res.json(item)
    }

    async edit(req, res){

    }

    async getOne(req, res){

    }

    async getAllByCategory(req, res){

    }
}

module.exports = new itemControllers();