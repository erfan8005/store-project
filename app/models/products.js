const {model, Schema, Types} = require('mongoose');

const ProductSchema = new Schema({
    title : {type : String, required : true},
    description : {type : String, required : true},
    images : {type: [String], required : true},
    price : {type : String, default : 0},
    discount: {type : Number, default : 0},
    count: {type : Number, required : true},
    type : {type : String, required : true},
    category : {type : Types.ObjectId, required : true},
    tags : {type : [String]},
    comments : {type : [], default : []},
    likes : {type : [Types.ObjectId], default : []},
    deslikes : {type : [Types.ObjectId], default : []},
    bookmark : {type : [Types.ObjectId], default : []},
    format : {type : String},
    teacher : {type : Types.ObjectId},
    time : {type : Number},
    detail : {type : Object , default : {
        length : "",
        size : "",
        madeIn : "",
    }},
})

module.exports = {
    ProductModel : model('product', ProductSchema)
}