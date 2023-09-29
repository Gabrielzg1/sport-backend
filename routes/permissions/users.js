const express = require('express')
const router = express.Router()
const controller = require("../../controllers/permissions/users");

router.get("/", controller.showall)
router.get("/:id", controller.showid)

router.post("/", controller.register)
router.post("/login", controller.login)

router.delete("/:id", controller.delete)


module.exports = router;
