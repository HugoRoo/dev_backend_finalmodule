const Post = require('../models/post');




const getAll = ()=>{
        
    return Post.find({}).populate({path: 'author comment.name', select:'name avatar'})

}
const createPost = async (dataPost) =>{
    const {author, title,image, article,tags, reaction, comment} = dataPost;


    const postCreated= await Post.create(dataPost);

    return Post.findById(postCreated._id).populate({path: 'author', select:'name'});

}

const updatePost =  (idPost, dataPost, idNow, idAuthor) =>{
    
    if(idNow != idAuthor) throw new Error('Not permission to update this post');
    return Post.findByIdAndUpdate(idPost,dataPost,{new: true})
}
const deletePost =  (idPost, idNow, idAuthor) =>{
    
    if(idNow != idAuthor) throw new Error('Not permission to delete this post');
    console.log(idAuthor);
    console.log(idPost);
    return Post.findByIdAndDelete(idPost)

}
const getForId = (idPost) =>{
    return Post.findById(idPost)
}

const getForIdWriter = (idWriter) =>{
    return Post.find({author : {_id: idWriter}}).populate({path: 'author', select:'name'})
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

    getForIdWriter,

}