const Router = require("express");
const router = Router();

const db = require("../controllers/bdp-brgys");

router.get("/", db.getAllBdpBrgys);

module.exports = router;
