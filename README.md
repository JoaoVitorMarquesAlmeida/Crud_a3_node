# Crud_a3_node
projeto de crud da a3 foi utilizado node js, express, nodemon, xampp para iniciar servidor sql, heidi para criar tabelas, e insomnia para manipular as ações de crud com a api rest
(lembrar de instalar os node modules e iniciar o servidor de acordo com o video)

•Sobre a criação do servidor, Database etc:

primeiro ponto:
-após iniciar um servidor mysql, (com xampp, por exemplo), inicie um sgdb de sua preferencia, (como por exemplo o heidiSQL),
crie uma nova sessão,deixe o tipo de rede em "MySql TCP/IP", (ou algo por estas linhas dependendo do sgdb de sua preferencia), em lybrary selecione "libmariadb.dll" deixe o servidor/ip,a porta, usuario e senha no padrão sql,e em banco de dados, selecione o que voce criou anteriormente e clique eu abrir.

segundo ponto:

-ja dentro do ambiente do sgdb escolhido crie o "database" ou base de dados dentro do servidor criado anteriormente utilizando o seguinte comando sql dentro da aba de "consulta":

"CREATE DATABASE controle_criacao;"

-dentro do database "controle_criacao", criado no passo anterior, crie uma table com as informações/parametros, que iremos manipular utilizando o crud dentro do projeto do git, utilizando o seguinte comando sql novamente na aba de "consulta":

CREATE TABLE fontesenergia (
   id INT NOT NULL AUTO INCREMENT PRIMARY KEY,
   DATA DATE,
   Fonte VARCHAR(100),
   origem VARCHAR(100),
   STATUS ENUM("renovavel", "naorenovavel",     "cancelado") DEFAULT "renovavel"
);

e rode-a na aba de "consulta", assim a "padronagem para os http requests posteriores vai ser criado!

(após isto se quiser testar criando um registro dentro do próprio sgdb de sua escolha utilizando a padronagem criada acima pela table "fontesenergia", para testar fique a vontade).

terceiro ponto:

dentro da ide de sua escolha utilizando o terminal, use os seguintes comandos para ter certeza que todos os modulos necessarios estão instalados:

"npm install express" (vai fazer com que seja criada a pasta "node modules"

"npm install -g nodemon"(ira tornar a atualização de servidor com alterções no projeto automatica)

quarto ponto:

para rodar o servidor dentro da ide use a seguinte linha de comando no terminal dentro da ide:

"nodemon .\index.js"

assim recebera um log no console indicando que o servidor foi iniciado!

quinto e ultimo ponto:

para testar as funcionalidades de crud, utilizando um testador de http request como insomnia por exemplo utilize os seguinte endpoints:

Create:

   metodo:POST
   "http://localhost:3000/atendimentos"

Read:

   metodo:GET
   "http://localhost:3000/atendimentos"

Update:
   metodo:
   "http://localhost:3000/atendimento/id

Delete:
   metodo:DELETE
   "http://localhost:3000/atendimento/id

(lembrando que nos metodos update e delete o "id" deve ser substituido pelo numero que é criado junto com o objeto no metodo post, é possivel ver eles no começo do "objeto" no metodo get do read!)

(lembrando tambem que na criação "Create" e na atualização "update" a requisição deve seguir a padronagem feita na criação da table)
   
   

