const express = require("express")
const router =express.Router()
const controller = require("../../controllers/permissions/reviews");


router.get("/", controller.showall)
router.post("/", controller.register)
router.delete("/:id", controller.delete)

module.exports = router