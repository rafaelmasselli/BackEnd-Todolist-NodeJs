const mongoose = require("mongoose");

const conexao = () => {
  mongoose
    .connect("mongodb://localhost:27017/Tarefas", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Conexao efetuada com sucesso");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = conexao;
