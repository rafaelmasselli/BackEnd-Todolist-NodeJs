const TarefaS = require("./../services/index.service");

const Service = new TarefaS();

class Controller {
  getTarefas = async (req, res) => {
    const tarefas = await Service.findAll();
    res
      .status(200)
      .send(tarefas)
      .catch((err) => {
        console.log(err);
        res.status(500).send({ Error: `Erro ${err}` });
      });
  };
  getByid = async (req, res) => {
    if (!req.params.id) {
      res.status(404).send({ Error: `Essa tarefa nao existe` });
    }

    const tarefa = await Service.findById(req.params.id);
    res
      .status(200)
      .send(tarefa)
      .catch((err) => {
        console.log(err);
        res.status(404).send({ Error: `Erro ${err}` });
      });
  };
  creatTarefas = async (req, res) => {
    if (!req.body) {
      res.status(404).send({ Error: "Preencha todos os campos corretamente" });
      return;
    }
    await Service.create(req.body)
      .then(() => {
        res.status(200).send({ message: "Tarefa criada com sucesso!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ Error: `Erro ${err}` });
      });
  };
  EditTarefas = async (req, res) => {
    if (!req.body) {
      res.status(404).send({ Error: "preencha todos os campos corretamente" });
      return;
    }
    await Service.Edit(req.params.id, req.body)
      .then(() => {
        res.status(200).send({ message: "Tarefa Editada com sucesso!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ Error: `Erro ${err}` });
      });
  };

  DeleteTareafa = async (req, res) => {
    if (!req.params.id) {
      res.status(404).send({ Error: "Tarefa nao encontrada" });
    }

    await Service.delete(req.params.id)
      .then(() => {
        res.status(200).send({ message: "Tarefa Deletada com sucesso!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ Error: `Erro ${err}` });
      });
  };
}

module.exports = Controller;
