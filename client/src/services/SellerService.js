import {host} from "../http";

class SellerService{
    static async registration(username, description, categories){
        return host.post('/api/seller/registration', {username, description, categories});
    }

    static async getItems(sellerId){
        return host.post('/api/seller/items', {sellerId});
        
    }
};

export default SellerService;