const router = require("express").Router();
const dealRoutes = require("./deals");

// Deal routes
router.use("/", dealRoutes);

module.exports = router;
