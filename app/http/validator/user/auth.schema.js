const Joi = require("joi");

const UserAuthSchema = Joi.object({
    phoneNum : Joi.string().max(11).pattern(/^09[0-9]{9}$/).error(new Error(".شماره مورد نظر اشتباه است"))
})

module.exports = {
    UserAuthSchema
}