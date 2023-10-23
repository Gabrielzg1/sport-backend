const express = require("express");
const bodyparser = require("body-parser");
const sequelize = require("./util/database");
const mongo = require("./util/mongo");
const app = express();
const port = 2020;
const cors = require("cors");

app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1><h2>API DO PROJETO teste</h2>");
});

app.get("/teste", (req, res) => {
  return res.json({ nome: "teste" }).status(200);
});

//Rotas para os CRUDs
app.use("/admins", require("./routes/permissions/admins"));
app.use("/users", require("./routes/permissions/users"));
app.use("/reviews", require("./routes/others/reviews"));
app.use("/players", require("./routes/others/players"));

(async () => {
  try {
    //await sequelize.sync({ force: false });
    await mongo();
    if (process.env.NODE_ENV !== "test") {
      app.listen(port);
    }
  } catch (error) {
    console.error(error);
  }
})();

module.exports = app;

// docker compose -f docker-compose.yml up -d
