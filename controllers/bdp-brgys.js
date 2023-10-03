const pool = require("../dbConfig/pg-apcemDB");
const query = require("../queries/bdp-brgys");

const getAllBdpBrgys = async (req, res) => {
  try {
    const results = await pool.query(query.selectAll);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getAllBdpBrgys };
