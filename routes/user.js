const router = require("express").Router();
const Controller = require("../controllers/user.js");
const Validator = require("../validators/user.js");

router.post("/", Validator.postCreate, Controller.CreateUser);
router.get("/", Controller.ListUsers);
router.get("/:id", Validator.getDetail, Controller.DetailUser);
router.patch("/:id", Validator.patchChange, Controller.ChangeRoleUser);
router.put("/:id", Validator.putEdit, Controller.EditUser);
router.delete("/:id", Validator.getDetail, Controller.DeleteUser);

module.exports = router;
