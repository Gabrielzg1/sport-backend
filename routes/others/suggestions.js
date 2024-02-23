const express = require("express");
const router = express.Router();
const controller = require("../../controllers/others/suggestions");

router.get("/", controller.showall);
router.post("/", controller.register);
router.delete("/:id", controller.delete);

module.exports = router;
