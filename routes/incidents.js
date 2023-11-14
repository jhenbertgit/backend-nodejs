const Router = require("express");
const router = Router();
const db = require("../controllers/incidents");

router.get("/", db.getAllIncidents);
router.get("/:id", db.getIncidentsById);
router.post("/", db.create);
router.put("/:id", db.update);
router.delete("/:id", db.remove);

module.exports = router;
