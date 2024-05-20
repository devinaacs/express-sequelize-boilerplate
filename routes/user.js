const router = require("express").Router();
const Controller = require("../controllers/user.js");
const Validator = require("../validators/user.js");

router.post('/', Validator.postCreate, Controller.CreateUser)
router.get("/", Controller.ListUsers);

module.exports = router;
