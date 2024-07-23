const { Router } = require("express");
const { apiRouters } = require("./api/home.routes");
const { userAuthRoutes } = require("./user/auth.routes");

const router = Router();
router.use(apiRouters);
router.use('/user/auth', userAuthRoutes);
router.post("/test",(req,res,next) => {
    const data = req.body;
    console.log(data);
    res.send(data);
    
})
module.exports = {
    AllRouters : router
}