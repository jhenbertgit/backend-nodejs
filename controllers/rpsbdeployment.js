const pool = require("../dbConfig/pg-db");
const query = require("../queries/rpsbdeployment");

const getAll = async (req, res) => {
  try {
    const results = await pool.query(query.selectAll);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error.message);
  }
};

const getById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const results = await pool.query(query.selectById, [id]);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error.message);
  }
};

const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const {
    rpsb_team,
    unit_of_cadre,
    covered_brgy,
    sitio,
    brgy,
    municipality,
    province,
    latitude,
    longitude,
    region,
    line_of_effort,
  } = req.body;
  try {
    const results = await pool.query(query.update, [
      rpsb_team,
      unit_of_cadre,
      covered_brgy,
      sitio,
      brgy,
      municipality,
      province,
      latitude,
      longitude,
      region,
      line_of_effort,
      id,
    ]);
    res
      .status(200)
      .json({ message: `Succesfully updated the data with ID: ${id}` });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getAll, getById, update };
