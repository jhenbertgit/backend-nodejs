const Router = require("express");
const router = Router();

const db = require("../controllers/ctg-events");

router.get("/", db.getAllEvents);
router.get("/:id", db.getEventsById);
router.post("/", db.create);
router.put("/:id", db.update);
router.delete("/:id", db.remove);

module.exports = router;
