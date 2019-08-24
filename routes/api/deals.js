const router = require("express").Router();
const dealsController = require("../../controllers/dealsController");

// Matches with "/api/currentdeals"
router.route("/currentdeals/")
.get(dealsController.findByStatusActive)

// Matches with "/api/pastdeals"
router.route("/pastdeals/")
  .get(dealsController.findByStatusInactive)

// Matches with "/api/alldeals"
router.route("/alldeals/")
  .get(dealsController.findAll)

// Matches with "/api/deals"
router.route("/")
  .get(dealsController.findAll)
  .post(dealsController.create);


// Matches with "/api/deals/:id"
router
  .route("/:id")
  .get(dealsController.findById)
  .put(dealsController.update)
  .delete(dealsController.remove);

module.exports = router;
