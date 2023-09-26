// visualizam: Cursos, testes e vagas divulgadas;
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
    },
    password: {
      type: String,
      required: true,
    },
    // Treinamentos que está
    applied: [
      {
        trainingId: { type: String, required: true },
        name: { type: String, required: true },
      },
    ],
    // Treinamentos que ele não passou (com indicação do motivo).
    disapprove: [
      {
        trainingId: { type: String, required: true },
        name: { type: String, required: true },
        reason: { type: String },
      },
    ],
    // Treinamentos que ele concluiu.
    finished: [
      {
        trainingId: { type: String, required: true },
        name: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);

/*const Sequilize = require("sequelize");
const db = require("../util/database");

const User = db.define("user", {
  id: {
    type: Sequilize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequilize.STRING,
  email: Sequilize.STRING,
  password: Sequilize.STRING,
  //Usuários tem nivel de permissão 0
  permission_level: Sequilize.INTEGER,
});
module.exports = User;
*/
