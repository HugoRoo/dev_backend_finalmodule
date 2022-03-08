const jwt = require('../lib/jwt');

function auth(req, res, next) {
    try {
        const {authorization: token} = req.headers
        

        const isValidToken = jwt.verify(token)
        
        

        if(!isValidToken) throw new Error('Not authorized')
        req.writerCurrent = isValidToken.id;
        next();
    } catch (error) {
        res.status(401)
        res.json({
            success: false,
            message: 'not authorized',
            error: error.message
        })
    }
}


module.exports = auth;