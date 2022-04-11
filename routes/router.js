const {Router} = require("express");
const {welcome, greet, protected} = require("../controllers/controller");
const {authRequire} = require("../middlewares/auth.middleware")

const indexRouter = Router();
indexRouter.use((req, res, next) => {
    console.log("Specific Router");
    next();
})

indexRouter.get("/", welcome);
indexRouter.get("./", greet);
indexRouter.post("/protected",authRequire, protected);

module.exports = indexRouter;