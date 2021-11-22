if (process.env.NODE_END !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const banco = require("./conexao/conect");
const rota = require("./routes/index.routes");

const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());

//variaveis de ambiente
const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

banco(db_url, db_user, db_pass, db_data);

app.use("/", rota);

app.listen(process.env.PORT || port, () => {
  console.log(`http://localhost:${port}`);
});
