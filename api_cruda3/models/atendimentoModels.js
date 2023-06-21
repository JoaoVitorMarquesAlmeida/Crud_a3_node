const conexao = require("../infraestrutura/conexao");

class AtendimentoModel {
    listar() {
        const sql = "SELECT * FROM fontesenergia"
        return new Promise((resolve, reject) =>{
            conexao.query(sql, {}, (error, resposta) =>{
            if(error) {
                console.log("Deu erro no listar...");
                reject(error);
            }
            console.log("simbora");
            resolve(resposta);
            });
        });
    }

    criar(novoAtendimento) {
        const sql = "INSERT INTO fontesenergia SET ?";
        return new Promise((resolve, reject) =>{
            conexao.query(sql, novoAtendimento, (error, resposta) =>{
                if(error) {
                    console.log("Deu erro no criar...");
                    reject(error);
                }
                console.log("simbora")
                resolve(resposta);
            });
        })
    }

    atualizar(AtendimentoAtualizado, id) {
        const sql = "UPDATE fontesenergia SET ? WHERE id = ?";
        return new Promise((resolve, reject) =>{
            conexao.query(sql, [AtendimentoAtualizado, id], (error, resposta) =>{
                if(error) {
                    console.log("Deu erro no criar...");
                    reject(error);
                }
                console.log("simbora")
                resolve(resposta);
            });
        })
    }

    delete(id) {
        const sql = "DELETE FROM fontesenergia WHERE id = ?";
        return new Promise((resolve, reject) =>{
            conexao.query(sql, id, (error, resposta) =>{
                if(error) {
                    console.log("Deu erro no criar...");
                    reject(error);
                }
                console.log("simbora")
                resolve(resposta);
            });
        })
    }


}

module.exports = new AtendimentoModel();
