const pool = require("../dbConfig/pg-apcemDb");
const query = require("../queries/incidents");

const getAllIncidents = async (req, res) => {
  try {
    const results = await pool.query(query.selectAll);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error.message);
  }
};

const getIncidentsById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const results = await pool.query(query.selectById, [id]);
    res.status(200).json(results.rows);
  } catch (error) {
    console.error(error.message);
  }
};

const create = async (req, res) => {
  const {
    unit_reported,
    source_of_report,
    type_of_incident,
    victim,
    suspect,
    witness,
    motive,
    modus_operandi,
    weapon_instrument_used,
    date_of_incident,
    time_of_incident,
    sitio,
    brgy,
    municipality,
    province,
    latitude,
    longitude,
    details_of_incident,
  } = req.body;
  try {
    const results = await pool.query(query.insert, [
      unit_reported,
      source_of_report,
      type_of_incident,
      victim,
      suspect,
      witness,
      motive,
      modus_operandi,
      weapon_instrument_used,
      date_of_incident,
      time_of_incident,
      sitio,
      brgy,
      municipality,
      province,
      latitude,
      longitude,
      details_of_incident,
    ]);
    res.status(200).json({
      message: `Succesfully added incident with ID: ${results.rows[0].id}`,
    });
  } catch (error) {
    console.error(error.message);
  }
};

const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const {
    unit_reported,
    source_of_report,
    type_of_incident,
    victim,
    suspect,
    witness,
    motive,
    modus_operandi,
    weapon_instrument_used,
    date_of_incident,
    time_of_incident,
    sitio,
    brgy,
    municipality,
    province,
    latitude,
    longitude,
    details_of_incident,
  } = req.body;
  try {
    await pool.query(query.update, [
      unit_reported,
      source_of_report,
      type_of_incident,
      victim,
      suspect,
      witness,
      motive,
      modus_operandi,
      weapon_instrument_used,
      date_of_incident,
      time_of_incident,
      sitio,
      brgy,
      municipality,
      province,
      latitude,
      longitude,
      details_of_incident,
      id,
    ]);
    res
      .status(200)
      .json({ message: `Succesfully updated incident with ID: ${id}` });
  } catch (error) {
    console.error(error.message);
  }
};

const remove = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await pool.query(query.delete, [id]);
    res
      .status(200)
      .json({ message: `Succesfully deleted data with ID: ${id}` });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { getAllIncidents, getIncidentsById, create, update, remove };
