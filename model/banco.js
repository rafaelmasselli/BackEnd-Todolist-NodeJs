const mongoose = require("mongoose");

const tarefasNew = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String },
  prioridade: { type: String, required: true },
  status: { type: String, required: true },
  prazo: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
});

const Tarefas = mongoose.model("Tarefas", tarefasNew);

module.exports = Tarefas;
