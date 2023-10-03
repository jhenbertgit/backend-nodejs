module.exports = {
  selectAll: "SELECT * FROM rpsbdeployment",

  selectById: "SELECT * FROM rpsbdeployment WHERE id = $1",

  insert:
    "INSERT INTO rpsbdeployment(rpsb_team, unit_of_cadre, covered_brgy, sitio, brgy, municipality, province, latitude, longitude, region, line_of_effort) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",

  update:
    "UPDATE rpsbdeployment SET rpsb_team = $1, unit_of_cadre = $2, covered_brgy = $3, sitio = $4, brgy = $5, municipality = $6, province = $7, latitude = $8, longitude = $9, region = $10, line_of_effort = $11 WHERE id = $12",

  delete: "DELETE FROM rpsbdeployment WHERE id = $1",

  createTable:
    "CREATE TABLE IF NOT EXISTS rpsbdeployment(id SERIAL, rpsb_team VARCHAR(50), unit_of_cadre VARCHAR, covered_brgy VARCHAR, sitio VARCHAR, brgy VARCHAR, municipality VARCHAR(30), province VARCHAR(50), latitude REAL, longitude REAL, region VARCHAR(10), line_of_effort VARCHAR, PRIMARY KEY(id))",
};
