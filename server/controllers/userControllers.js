const userService = require('../service/userService');

class userControllers{
    async registration(req, res){

        const {username, email, password} = req.body;
        const userData = await userService.registration(username, email, password);

        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
        return res.json(userData);
    };

    async login(req, res){
        const { username, password} = req.body;
        const userData =  await userService.login(username, password);

        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
        return res.json(userData);
    };

    async logout(req, res){
        const {refreshToken} = req.cookies;
        await userService.logout(refreshToken);

        res.clearCookie('refreshToken');
        return res.json('alright');
    }

    async refresh(req, res, next){
        try {
            const {refreshToken} = req.cookies;
            const userData =  await userService.refresh(refreshToken);

            if (!userData){
                res.status(401)
                return;
            }
            
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userData);
        } catch (error) {
            return next(e);
        }
        
    };

    async checkAuth(req, res){
        
        const {refreshToken} = req.cookies;
        const userData =  await userService.refresh(refreshToken);
        

        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
        return res.json(userData);
    }

   
}

module.exports = new userControllers();