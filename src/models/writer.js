const mg = require('mongoose');


const writerSchema = new mg.Schema({
    
    avatar:{
        type: String,
        required: false,
    },
    bio:{
        type: String,
        required: true,
        minLength: 10,
        maxLength: 255
    },
    nationality:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 10
    },
    name:{
        type: String,
        required: true,
        minLength: 3,
        maxLength: 10
    },
    email:{
        type: String,
        required: true,
        match: /.+@.+\..+/
    },
    password: {
        type: String,
        required: true,
    }
   
});

const model = mg.model('writers', writerSchema);

module.exports = model;