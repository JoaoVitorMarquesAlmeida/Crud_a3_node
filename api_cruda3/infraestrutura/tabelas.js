class Tabelas{
    init(conexao){
        this.conexao = conexao;
        this.criartabelaEnergia();
    }

    criartabelaEnergia(){
        const sql =`
            CREATE TABLE if NOT EXISTS fontesenergia (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            DATA DATE,
            fonte VARCHAR(100),
            origem VARCHAR(100),
            STATUS ENUM("renovavel","naorenovavel","cancelado")DEFAULT "renovavel"
        );
            `;
        this.conexao.query(sql, (error)=> {
            if(error){
                console.log("erro na criação da tabela fonte de energia");
                console.log(error.message());
                return;
            }
            console.log("criada a tabela com sucesso")
        });
    }
}

module.exports = new Tabelas();