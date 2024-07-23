const { Router } = require("express");
const homeController = require("../../http/controller/api/home.controller");

const router = Router();

router.get('/', homeController.IndexPage);

module.exports = {
    apiRouters : router
}