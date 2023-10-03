module.exports = {
  selectAll: "SELECT * FROM bdp_brgys",

  selectById: "SELECT * FROM bdp_brgys WHERE id = $1",

  insert:
    "INSERT INTO bdp_brgys(province, city_municipality, barangay, region) VALUES($1, $2, $3, $4) RETURNING *",

  update:
    "UPDATE bdp_brgys SET province = $1, city_municipality = $2, barangay = $3, region = $4 WHERE id = $5",

  delete: "DELETE FROM bdp_brgys WHERE id = $1",

  createTable:
    "CREATE TABLE IF NOT EXISTS bdp_brgys(id SERIAL, province VARCHAR(30), city_municipality VARCHAR(50), barangay VARCHAR(50), region VARCHAR(5) PRIMARY KEY(id))",
};
