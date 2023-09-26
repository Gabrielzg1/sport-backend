const Sequilize = require("sequelize");
require("dotenv/config");

const sequelize = new Sequilize(
	process.env.PG_DB,
	process.env.PG_USER,
	process.env.PG_PASSWORD,
	{
		host: process.env.PG_HOST,
		dialect: "postgres",
		logging: false,
	}
);

module.exports = sequelize;

/*
const sequelize = new Sequilize("node_db", "Gabriel", "12345", {
  host: "0.0.0.0",
  dialect: "postgres",
  logging: false,
});

*/
