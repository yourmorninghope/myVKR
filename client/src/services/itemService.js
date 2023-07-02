import {host} from "../http";
// const host = 'http://localhost:3000';

class ItemService{
    static async saveItem(item, sellerId){
        return host.post('/api/item/save', {item, sellerId});

    }


};

export default ItemService;