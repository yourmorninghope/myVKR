import {makeAutoObservable} from 'mobx';
import ItemService from '../services/itemService';

class ItemStore{
    constructor(){
        makeAutoObservable(this);
    }

    async saveItem(item, sellerId){
        try {
            await ItemService.saveItem(item, sellerId);
            
        } catch (error) {
            console.log(error.message)
        }
    }
};

export default ItemStore;