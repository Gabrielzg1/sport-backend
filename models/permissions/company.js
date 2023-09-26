/*
Empresas parceiras visualizam:
- Todas as atividades concluídas pelos alunos.
- Resultados (notas) intermediários e finais dos alunos nos cursos aos quais a empresa é parceira.
- CRUD de vagas de emprego e associando elas à cursos ofertados.

*/

//import mongoose from "mongoose";
const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
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
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Company", companySchema);
