
const router = require("express").Router();

const userLogInController = require("../controllers/user/userLogInController");
const userSignUpController = require("../controllers/user/userSignUpController");


router.post("/login", userLogInController);

router.post("/signup", userSignUpController)


router.post("/", async(req, res)=>{
    console.log(req.body);

    res.send("user routes is working");
})

module.exports = router;