const mg = require('mongoose');


const postSchema = new mg.Schema({
    author: {type: mg.Types.ObjectId, ref: 'writers'},
    title:{
        type: String,
        required: true,
        maxLength: 50
    },
    image: {
        type: String
    },
    article:{
        type: String,
        minLength: 25,
        maxLength: 255,
        required: true
    },
    tags:[{
        type: String
    }],
    reaction:{
        type: Number
    },
    comment:[{
        name: {type: mg.Types.ObjectId, ref: 'writers'},
        content: String,
    }],
    
    
},
{
    timestamp: true
})

const model = mg.model('posts', postSchema);

module.exports = model;