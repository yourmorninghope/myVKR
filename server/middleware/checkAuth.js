const tokenService = require('../service/tokenService');

module.exports = (req, res, next)=>{
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader){
        res.json('не авторизован1');
    }

    const accessToken = authorizationHeader.split(' ')[1];
    // console.log(accessToken);
    if (!accessToken){
        console.log(authorizationHeader)
        res.json('не авторизован2');

    }

    const userData = tokenService.validateAccessToken(accessToken);

    if (!userData){
        console.log('аксесс токен не прошел')
        res.status(401).json('аксесс токен не прошел');
        return;
        
    }

    console.log('все ок в мидлвэр')
    // console.log(userData)
    req.user = userData;
    next();
}