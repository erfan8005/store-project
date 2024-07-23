const { Router } = require("express");
const UserAuthController = require('../../http/controller/user/auth/auth.controller');

const router = Router();

router.post("/login", UserAuthController.login);

module.exports= {
    userAuthRoutes : router
}