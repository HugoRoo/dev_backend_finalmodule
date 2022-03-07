const bcrypt = require('bcrypt');
const saltRounds = 10;

function hash(plaintext) {
    
    return bcrypt.hash(plaintext, saltRounds)
}

module.exports = {
    ...bcrypt,
    hash
}