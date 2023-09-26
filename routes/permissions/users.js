const controller = require("../../controllers/permissions/users");
const router = require("express").Router();

router.get("/", controller.index);
router.get("/:id", controller.show);
router.post("/", controller.create);
router.put("/activity/applied/:userId", controller.updateAppliedActivity);
router.put(
  "/activity/applied/cancel/:userId",
  controller.cancelAppliedActivity
);
router.put("/activity/finished/:userId", controller.updateFinishedActivity);
router.put("/activity/disapprove/:userId", controller.updateDisapproveActivity);

router.post("/login", controller.login);

router.delete("/:userId", controller.destroy);

module.exports = router;
