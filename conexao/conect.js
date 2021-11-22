const mongoose = require("mongoose");

const conexao = (url, user, pass, data) => {
  mongoose
    .connect(`${url}/${data}`, {
      user: user,
      pass: pass,
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
