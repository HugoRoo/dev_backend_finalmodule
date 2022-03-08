const jwt = require('jsonwebtoken');

const JWT_SECRET = 'supersecret'

const sign = (payload)=>{
    return jwt.sign(payload, JWT_SECRET, {expiresIn: '7d'})
}

const verify = (token)=>{
    return jwt.verify(token, JWT_SECRET)
}


module.exports = {
    ...jwt,
    sign,
    verify
}
