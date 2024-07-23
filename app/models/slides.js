const {model, Schema} = require('mongoose');

const SliderSchema = new Schema({
    title : {type : String, required : true},
    text : {type : String, required : true},
    image : {type : String, required : true},
    type : {type : String, default : "base"},
})

module.exports = {
    SliderModel : model('slider', SliderSchema)
}