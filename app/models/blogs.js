const {model, Schema, Types} = require('mongoose');

const BlogSchema = new Schema({
    author : {type : Types.ObjectId, required :true},
    title : {type: String , required  :true},
    text : {type : String, required : true},
    image : {type: String, required : true},
    tags : {type : [String], default: []},
    category : {type : Types.ObjectId, required : true},
    comments: {type: [Types.ObjectId], default: []},
    likes : {type : [Types.ObjectId], default : []}, 
    dislikes : {type : [Types.ObjectId], default : []}, 
    bookmark : {type : [Types.ObjectId], default : []}, 
})

module.exports = {
    BlogModel : model('Blog', BlogSchema)
}