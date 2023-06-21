const atendimentoModels = require("../models/atendimentoModels");
const AtendimentoModel = require("../models/atendimentoModels");

class AtendimentoController{
    buscar() {
        return atendimentoModels.listar();
    }
    criar(novoAtendimento) {
        return atendimentoModels.criar(novoAtendimento);
    }
    atualizar(AtendimentoAtualizado, id) {
        return AtendimentoModel.atualizar(AtendimentoAtualizado, id);
    }
    deletar(id) {
        return AtendimentoModel.delete(id);
    }
}

module.exports = new AtendimentoController();