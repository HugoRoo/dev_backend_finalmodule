const Post = require('../models/post');

const getAll = ()=>{
    return Post.find({}).populate({path: 'author', select:'-password -email'})
}
const createPost = async (dataPost) =>{
    const {author, title,image, article,tags, reaction, comment} = dataPost;


    const postCreated= await Post.create(dataPost);
    return Post.findById(postCreated._id).populate({path: 'author', select:'-password -email'});

}

const updatePost =  (idPost, dataPost) =>{
    const {author, title, image, article} = dataPost;

    return Post.findByIdAndUpdate(idPost,dataPost,{new: true})
}
const deletePost =  (idPost) =>{
    return Post.findOneAndDelete(idPost)
}
const getForId = (idPost) =>{
    return Post.findById(idPost)
}
const createComment = (idPost, dataComment) =>{
    
    
    return post = Post.findByIdAndUpdate(idPost,{$push: { comment: dataComment}},{new: true}).populate({path: 'comment.name', select:'name'})
    

}
module.exports = {
    createPost,
    getAll,
    updatePost,
    deletePost, 
    getForId,
    createComment,
}