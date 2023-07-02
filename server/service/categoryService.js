const CategoryModel = require( '../models/category');

class CategoryService{
    async getAll(){
        const categories = CategoryModel.find();
        return categories;
    }
}

module.exports =  new CategoryService();