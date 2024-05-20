const router = require("express").Router();
const Controller = require("../controllers/user.js");

router.post('/', Controller.CreateUser)
router.get("/", Controller.ListUsers);

module.exports = router;
