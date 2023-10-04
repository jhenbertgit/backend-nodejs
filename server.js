const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const pool = require("./dbConfig/pg-db");

const PORT = 5000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors({ origin: "*" }));

// test connection to database
// const connectDb = async () => {
//   try {
//     await pool.connect();
//     const res = await pool.query(query.createTable);
//     console.log(res);
//     console.log("Successfuly connected to PostgreSQL database");
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// connectDb();

app.get("/", (req, res) => {
  res.send(
    "<h1>Hello World!</h1><p>Greetings for Intelligence Division, APC-EM</p>"
  );
});

const rpsbDeploymentRoute = require("./routes/rpsbdeployment");
const bdpBrgysRoute = require("./routes/bdp-brgys");
const ctgEventsRoute = require("./routes/ctg-events");

app.use("/api/v1/rpsbdeployment", rpsbDeploymentRoute);
app.use("/api/v1/bdpbrgys", bdpBrgysRoute);
app.use("/api/v1/events", ctgEventsRoute);

app.listen(PORT, () => {
  console.log(`server is running at http://${process.env.URL}:${PORT}`);
});
