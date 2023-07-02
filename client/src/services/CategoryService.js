import {host} from "../http";

class CategoryService{
    static async getCategories(){
        return  host.get('/api/categories');
    }

    static async getCharacteristics(category){
        return host.post('/api/categories/getCharacteristics', category);
    }

};

export default CategoryService;