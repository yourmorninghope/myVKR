import api from "../http";

class UserService{
    static async getUsers(){
        return api.get('/users');
    }
}