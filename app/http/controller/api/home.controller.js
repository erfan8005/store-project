const Controller = require("../controller");

module.exports = new class Home extends Controller {
    IndexPage(req,res,next) {
        return res.status(200).send("Index Page");
    }
    IndexPageTest(req,res,next) {
        res.send(Object.assign(req.params, req.body))
    }
}