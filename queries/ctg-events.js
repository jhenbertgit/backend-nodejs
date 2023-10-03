module.exports = {
  selectAll: "SELECT * FROM events ORDER BY date_of_report DESC",

  selectById: "SELECT * FROM events WHERE id = $1",

  insert:
    "INSERT INTO events(unit_reported, source_of_report, date_of_report, date_of_activity, evaluation, type_of_activity, activity, enemy_unit, strength, leader, position, sitio, brgy, municipality, province, details_of_activity, mgrs, latitude, longitude, bdp_status, gf_vertical_units, type, rpsb_deployment_status) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23) RETURNING *",

  update:
    "UPDATE events SET unit_reported = $1, source_of_report = $2, date_of_report = $3, date_of_activity = $4, evaluation = $5, type_of_activity = $6, activity = $7, enemy_unit = $8, strength = $9, leader = $10, position = $11, sitio = $12, brgy = $13, municipality = $14, province = $15, details_of_activity = $16, mgrs = $17, latitude = $18, longitude = $19, bdp_status = $20, gf_vertical_units = $21, type = $22, rpsb_deployment_status = $23 WHERE id = $24",

  delete: "DELETE FROM events WHERE id = $1",

  createTable:
    "CREATE TABLE IF NOT EXISTS events(id SERIAL unit_reported VARCHAR(30), source_of_report VARCHAR(30), date_of_report DATE date_of_activity DATE, evaluation VARCHAR(30), type_of_activity VARCHAR(50) NOT NULL, activity VARCHAR(30), enemy_unit VARCHAR(50), strength VARCHAR(30), leader VARCHAR(50), position VARCHAR(50), sitio VARCHAR(50), brgy VARCHAR(50), municipality VARCHAR(30), province VARCHAR(30), details_of_activity TEXT, mgrs VARCHAR(30), latitude DOUBLE NOT NULL, longitude DOUBLE NOT NULL, bdp_status VARCHAR(10), gf_vertical_units VARCHAR(100), type VARCHAR(5), rpsb_deployment_status VARCHAR(25) PRIMARY KEY(id))",
};
