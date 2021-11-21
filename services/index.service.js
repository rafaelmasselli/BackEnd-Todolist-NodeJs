const TarefasM = require("./../model/banco");

class TarefaS {
  findAll = async () => await TarefasM.find();

  findById = async (id) => await TarefasM.findById(id);

  create = async (tarefa) => {
    return await TarefasM.create(tarefa);
  };

  Edit = async (id, intem) => {
    return await TarefasM.updateOne({ _id: id }, intem);
  };

  delete = async (id) => {
    return await TarefasM.deleteOne({ _id: id });
  };
}

module.exports = TarefaS;
