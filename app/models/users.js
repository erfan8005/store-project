const {model, Schema} = require('mongoose');

const BlogSchema = new Schema({
    firstname : {type : String, required : true},
    lastname : {type : String, required : true},
    username : {type : String, requird : true, lowercase : true},
    bills : {type : [String], default : []},
    discount : {type: Number, default : 0},
    phoneNum : {type : String},
    email : {type : String, lowercase : true},
    password : {type : String, required : true},
    otp : {type : Object, default : {
        code : "",
        expiresIn : 0
    }},
    birthday : {type :  String},
    Roles : {type  : [String], default : ["USER"]}
})

module.exports = {
    BlogModel : model('Blog', BlogSchema)
}