import {makeAutoObservable} from 'mobx';
import CategoryService from '../services/CategoryService';
// import AuthService from '../services/AuthService';
// import { API_URL } from '../http';
// import axios from 'axios';
// import { USER_ROUTE } from '../utils/consts';
// import { LOGIN_ROUTE } from '../utils/consts';


class CategoryStore{

    constructor(){
        this._categories = [];
        this._categoryTypes = [];
        this._categoryMaterials = [];
        this._categoryColors = [];
        makeAutoObservable(this);
    }

    setCategories(category){
        
    }

    get categories(){
        return this._categories;
    }
    
    async getCategories(){
        try {
            const response = await CategoryService.getCategories();
            console.log(response.data);

            this._categories = response.data;
        } catch (error) {
            console.log('категории не подгрузились');
        }
    }

    getCharacteristics(category){
        // console.log(category)
        this._categories.map((categoryItem) => {
            if (categoryItem.name == category){
                // console.log('все ок')
                this._categoryColors = categoryItem.color;
                this._categoryMaterials = categoryItem.material;
                this._categoryTypes = categoryItem.type;
            }
            
            // console.log(categoryItem.name)
        }) 
        // const response = await CategoryService.getCharacteristics(category);
        // this._characteristics = response.data;
    }

}
export default CategoryStore;