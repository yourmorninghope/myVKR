import {host} from '../http'

class AuthService{
    static async login(username, password){
        return host.post('/api/user/login', {username, password});
    }

    static async registration(email, username, password){
        return host.post('/api/user/registration', {username, email, password});
    }

    static async logout(){
        return host.post('/api/user/logout');
    }
};

export default AuthService;