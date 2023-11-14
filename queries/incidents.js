module.exports = {
  selectAll: "SELECT * FROM incidents ORDER BY date_of_incident DESC",

  selectById: "SELECT * FROM incidents WHERE id = $1",

  insert:
    "INSERT INTO incidents(unit_reported, source_of_report, type_of_incident, victim, suspect, witness, motive, modus_operandi, weapon_instrument_used, date_of_incident, time_of_incident, sitio, brgy, municipality, province, latitude, longitude, details_of_incident) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *",

  update:
    "UPDATE incidents SET unit_reported = $1, source_of_report = $2, type_of_incident = $3, victim = $4, suspect = $5, witness = $6, motive = $7, modus_operandi = $8, weapon_instrument_used = $9, date_of_incident = $10, time_of_incident = $11, sitio = $12, brgy = $13, municipality = $14, province = $15, latitude = $16, longitude = $17, details_of_incident = $18 WHERE id = $19",

  delete: "DELETE FROM incidents WHERE id = $1",

  createTable:
    "CREATE TABLE IF NOT EXISTS incidents(id SERIAL, unit_reported VARCHAR(15), source_of_report VARCHAR(50), type_of_incident VARCHAR(50), victim VARCHAR(50), suspect VARCHAR(50), witness VARCHAR(50), motive VARCHAR(50), modus_operandi VARCHAR(100), weapon_instrument_used VARCHAR(100), date_of_incident DATE, time_of_incident VARCHAR(100), sitio VARCHAR(100), brgy VARCHAR(100), municipality VARCHAR(100), province VARCHAR(100), latitude REAL, longitude REAL, details_of_incident TEXT, PRIMARY KEY(id))",
};
