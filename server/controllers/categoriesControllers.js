const categoryService = require('../service/categoryService');

class categoriesControllers{
    async getAll(req, res){
        const categories = await categoryService.getAll();

        return res.json(categories);
    }

}

module.exports = new categoriesControllers();