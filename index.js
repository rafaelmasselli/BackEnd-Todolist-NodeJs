const express = require("express");
const cors = require("cors");
const banco = require("./conexao/conect");
const rota = require("./routes/index.routes");

const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());
banco();

app.use("/", rota);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
