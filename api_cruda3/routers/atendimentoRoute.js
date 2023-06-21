const { Router } = require("express");
const router = Router();
const AtendimentoController = require("../controllers/atendimentoController");
const atendimentoController = require("../controllers/atendimentoController");


//get post put delete

//read lista energias criadas
router.get("/atendimentos", (req, res) =>{
    const listaEnergias = atendimentoController.buscar();
    listaEnergias
    .then(atendimentos => res.status(200).json(atendimentos))
    .catch(error => res.status(400).json(error.message))
});

//create cria nova fonte de energia
router.post("/atendimentos", (req, res) => {
    const novoAtendimento = req.body;
    const atendimento = atendimentoController.criar(novoAtendimento);
    atendimento
        .then(energiaCriada => res.status(201).json(energiaCriada))
        .catch(error => res.status(400).json(error.message));
});

//atualiza a fonte de energia
router.put("/atendimento/:id", (req, res) => {
    const { id } = req.params;
    const AtendimentoAtualizado = req.body;
    const atendimento = atendimentoController.atualizar(
        AtendimentoAtualizado,
         id
    );
    atendimento
    .then((resultAtendimentoAtualizado) =>
     res.status(200).json(resultAtendimentoAtualizado) 
    )
    .catch((error) => res.status(400).json(error.message));
});



router.delete("/atendimento/:id", (req, res) => {
    const{ id } = req.params;
    const atendimento = atendimentoController.deletar(id);
    atendimento
        .then((resultAtendimentoDeletado) =>
             res.status(200).json(resultAtendimentoDeletado) 
    )
    .catch((error) => res.status(400).json(error.message));
});

module.exports = router;
