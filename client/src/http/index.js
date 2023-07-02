import axios from 'axios';

const host = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:7000'
});

const authHost = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:7000'
});


const authInterceptor = (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
};


authHost.interceptors.request.use(authInterceptor);
authHost.interceptors.response.use((config)=>{
    return config;
}, async (error)=>{
    const originalRequest = error.config;

    if (error.response.status == 401){
        const response = await authHost.get('/api/user/refresh', {withCredentials: true})
        
        localStorage.setItem('token', response.data.accessToken);
        return authHost.request(originalRequest);
    }
})

export {host, authHost};