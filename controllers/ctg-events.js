const pool = require("../dbConfig/pg-apcemDb");
const query = require("../queries/ctg-events");

const getAllEvents = async (req, res) => {
  try {
    const results = await pool.query(query.selectAll);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error.message);
  }
};

const getEventsById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const results = await pool.query(query.selectById, [id]);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error);
  }
};

const create = async (req, res) => {
  const {
    unit_reported,
    source_of_report,
    date_of_report,
    date_of_activity,
    evaluation,
    type_of_activity,
    activity,
    enemy_unit,
    strength,
    leader,
    position,
    sitio,
    brgy,
    municipality,
    province,
    details_of_activity,
    mgrs,
    latitude,
    longitude,
    bdp_status,
    gf_vertical_units,
    type,
    rpsb_deployment_status,
  } = req.body;
  try {
    const results = await query.pool(query.insert, [
      unit_reported,
      source_of_report,
      date_of_report,
      date_of_activity,
      evaluation,
      type_of_activity,
      activity,
      enemy_unit,
      strength,
      leader,
      position,
      sitio,
      brgy,
      municipality,
      province,
      details_of_activity,
      mgrs,
      latitude,
      longitude,
      bdp_status,
      gf_vertical_units,
      type,
      rpsb_deployment_status,
    ]);
    res.status(200).json({
      message: `Succesfully added data with ID: ${results.rows[0].id}`,
    });
  } catch (error) {
    error.console(error.message);
  }
};

const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const {
    unit_reported,
    source_of_report,
    date_of_report,
    date_of_activity,
    evaluation,
    type_of_activity,
    activity,
    enemy_unit,
    strength,
    leader,
    position,
    sitio,
    brgy,
    municipality,
    province,
    details_of_activity,
    mgrs,
    latitude,
    longitude,
    bdp_status,
    gf_vertical_units,
    type,
    rpsb_deployment_status,
  } = req.body;
  const results = await pool.query(query.update, [
    unit_reported,
    source_of_report,
    date_of_report,
    date_of_activity,
    evaluation,
    type_of_activity,
    activity,
    enemy_unit,
    strength,
    leader,
    position,
    sitio,
    brgy,
    municipality,
    province,
    details_of_activity,
    mgrs,
    latitude,
    longitude,
    bdp_status,
    gf_vertical_units,
    type,
    rpsb_deployment_status,
    id,
  ]);
  res.status(200).json({ message: `Sucessfully updated data with ID: ${id}` });
};

const remove = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const results = await pool.query(query.delete, [id]);
    res
      .status(200)
      .json({ message: `Sucessfully deleted data with ID: ${id}` });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getAllEvents, getEventsById, create, update, remove };
