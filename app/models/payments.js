const {model, Schema} = require('mongoose');

const BlogSchema = new Schema({
    
})

module.exports = {
    BlogModel : model('Blog', BlogSchema)
}