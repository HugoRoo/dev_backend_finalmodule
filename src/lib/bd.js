const mg = require('mongoose');
const credencials = require('../credencials/credencials');
const DB_USER = credencials.user;
const DB_PASSWORD = credencials.password;
const DB_HOST = 'devtoproyect.1fyom.mongodb.net';
const DB_NAME = 'devTo';

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;


const connect = () =>{
    return mg.connect(URL);
}

module.exports = connect;