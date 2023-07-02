import {makeAutoObservable} from 'mobx';
import AuthService from '../services/AuthService';
import {authHost} from '../http/index'
import { USER_ROUTE, LOGIN_ROUTE, SELLER_ACC_ROUTE} from '../utils/consts';

class UserStore{
   
    constructor(){
        this.username = '';
        this.id = '';
        this.email = '';
        this.isAuth = true;
        this.isSeller = false;
        makeAutoObservable(this);
    }

    setAuth(bool){
        this.isAuth = bool;
    }

    setUsername(username){
        this.username = username;
    }
    setId(id){
        this.id = id;
    }
    setEmail(email){
        this.email = email;
    }

    async login(username, password, history){
        try {
            const response = await AuthService.login(username, password);
            localStorage.setItem('token', response.data.accessToken);

            this.setAuth(true);
            this.setUsername(response.data.payload.username);
            this.setId(response.data.payload.id);
            this.setEmail(response.data.payload.email);

            let isSeller = response.data.isSeller;
            isSeller ? history(SELLER_ACC_ROUTE) : history(USER_ROUTE);

        } catch (error) {
            console.log(error.responce.data.message);
        }

    }

    async registration(email, username, password, navigate){
        try {
            const response = await AuthService.registration(email, username, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUsername(response.data.payload.username);
            this.setId(response.data.payload.id);
            this.setEmail(response.data.payload.email);
            navigate(LOGIN_ROUTE);

        } catch (error) {
            console.log(error.responce.data.message);
        }
    }

    async logout(){
        try {
            await AuthService.logout();
            localStorage.removeItem('token');

            this.setAuth(false);
            this.setUsername('');
            this.setId('');
            this.setEmail('');

        } catch (error) {
            console.log(error.responce.data.message);
        }

    }

    checkAuth = async () => {
        try {
            const response = await authHost.get('/api/user/refresh', {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);

            this.setAuth(true);
            this.setUsername(response.data.payload.username);
            this.setId(response.data.payload.id);
            this.setEmail(response.data.payload.email);
            
        } catch (error) {
            console.log('не авторизован');
        }
    }
}

export default UserStore;
