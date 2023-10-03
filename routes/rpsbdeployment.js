const Router = require("express");
const router = Router();

const db = require("../controllers/rpsbdeployment");

router.get("/", db.getAll);
router.get("/:id", db.getById);
router.put("/:id", db.update);

module.exports = router;
