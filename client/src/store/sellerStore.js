import {makeAutoObservable} from 'mobx';
import SellerService from '../services/SellerService';
// import { API_URL } from '../http';
import axios from 'axios';
import { USER_ROUTE } from '../utils/consts';
import { SELLER_ACC_ROUTE } from '../utils/consts';


class SellerStore{
   
    username = '';
    id = '';
    description = '';
    categories = [];
    items = []
    sellerCat = [];

    constructor(){
        makeAutoObservable(this);
    }

    setDescription(description){
        this.description = description;
    }

    setUsername(username){
        this.username = username;
    }
    setId(id){
        this.id = id;
    }

    setCategories(category){
        
        if (this.categories.includes(category)){
            let i = this.categories.indexOf(category);
            this.categories.splice(i, 1);
            return;
        }
        this.categories.push(category);
    }

    async registration(username, description, categories, navigate){
        try {
            const response = await SellerService.registration(username, description, categories);
            localStorage.setItem('token', response.data.accessToken);
            this.setDescription(description);
            this.setUsername(response.data.payload.username);
            this.setId(response.data.payload.id);
            navigate(SELLER_ACC_ROUTE);

        } catch (error) {
            console.log('чет не так');
        }
    }

    async getItems(sellerId){
        try {
            const response = await SellerService.getItems(sellerId);
            console.log(response.data)
            this.items = response.data.items;
            this.setDescription(response.data.seller.sellerData.description);
            this.setId(response.data.seller.sellerSummary._id);
            this.setUsername(response.data.seller.sellerSummary.username);
            this.sellerCat = response.data.seller.arr;
            
        } catch (error) {
            console.log('товары не подгружены')
        }
    }
    


}

export default SellerStore;
