const createError = require("http-errors");
const { UserAuthSchema } = require("../../../validator/user/auth.schema");

module.exports = new class UserAuthController {
    async login(req,res,next) {
        try {
            const {body} = req;
            console.log(body);
            await UserAuthSchema.validateAsync(req.body);
            return res.send({message : ".شما با موفقیت وارد شدید"});       
        } catch (err) {
            next(createError.BadRequest(err.message));
        }

    }
}

