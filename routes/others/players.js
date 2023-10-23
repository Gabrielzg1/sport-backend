const express = require("express");
const router = express.Router();
const controller = require("../../controllers/others/players");

router.get("/", controller.getPlayers);

module.exports = router;
