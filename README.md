# NLW5-Node
Estudos do NLW05 - trilha de node.js {instrutora: Dani Evangelista}

<b>Primeiro dia</b>:
  <p>->Instalação e configuração do ambiente;</p>
    -->Configurado o typeScript;<br />
    -->Configurado Express - microframework que auxiliará na criação de rotas dentro da aplicação;<br />
    -->Instalado e configurado o Insomnia para fazer requisições dos mais variados tipos;<br/>
    -->O que são e para que servem os verbos HTTP(GET{busca}; POST{criação}; PUT{alteração}; DELETE{deletar/apagar}; PATCH{alterar informação específica});<br />

  <p>->Criado as primeiras requisições para teste {GET e POST}</p>

<p><b>Segundo dia:</b></p>
  <p>>Explicação das formas que podemos utilizar um banco de dados dentro de uma aplicação:</p>
    -->Driver Nativo - {Exige conhecimento da linguagem do banco de dados escolhido, ou seja escreve-se as querys puras dentro do código};<br />
    -->Query Builder(knex.js) - {cria um padrão para consultas, facilita a vida, caso haja uma troca no DB não é preciso reescrever todas as querys novamente};<br />
    -->ORM(TypeORM ou Sequelize) - {faz o mapeamento de objetos para entidade no banco de dados, a grosso modo replica classes para o banco de dados};<br /><br>
  
  <p>Instalado e configurado o ambiente de banco de dados:</p>
    ->TypeORM, SQLite3, reflect-metadata;<br/>
    ->Migrations:<br />
    -->Cria um histórico de tudo que está sendo criado/removido/alterado dentro do banco de dados, tornando os banco de dados atualizados/sincronizados, evitando erros deste tipo<br />
    ->Criação e configuração da primeira migration<br />
    -->Script para a criação da migration(yarn typeorm migration:create -n nome_da_migration);<br />
    -->Dentro do arquivo criado há dois métodos, UP e DOWN<br />
    --->Todas as vezes que quisermos executar uma migration utilizamos o script(yarn typeorm migration:run), que chama o método UP;<br />
    --->Caso haja algum erro ou precise reverter a migration utilizamos o script(yarn typeorm migration:revert), que chama o método DOWN;<br />
    ->Repositórios: <br />
    -->Classe responsável por todas as manipulações de dados, ou seja faz a comunicação entre a entidade e tabelas no BD (Representação e manipulação de dados);<br />    
    ->Tipos de parâmetros para requisições: <br />
    -->Routes Params => parametros de rotas (http://localhost:8080/settings/1)<br />
    -->Query Params  => Filtros e buscas    (http://localhost:8080/settings/1?search=algo_para_pesquisar)<br />
    -->Body Params   => parametros que vem no corpo da requisição({objeto json no corpo da requisição})<br/><br />
    
<p><b>Terceiro dia:</b></p>
  Basicamente nesta aula foi criado a estrutura de tabelas e entidades, além de terem sido feitas abstrações no código fonte;<br />
    --> Criação das tabelas e entidades User e Messages<br />
    ---> Criação de relacionamento ManyToOne; <br />
    -->Feito abstrações no código (Services/Entities/Controller/Repositories/Database_Migrations)<br/><br />
   
 <p><b>Quarto dia:</b></p>
  Concluido a criação das tabelas e criado WebSocket dentro da aplicação.<br />
  Explicação do protocolo HTTP: cliente manda a requisição e aguarda a resposta do servidor, assim que o cliente recebe a resposta do servidor a comunicação entre as partes é encerrada;<br/>
  Explicação do protocolo ws(web socket): o cliente tem que se conectar ao servidor e esta conexão só será perdida quando o cliente se desconectar do Web Socket, assim o cliente pode enviar informações ao servidor, e o servidor pode mandar informações ao cliente, mesmo o cliente não solicitando nada.<br /><br />
  
  <p><b>Quinto dia:</b></p>
    callaback - função de retorno para quem chamou este callback<br />
    literal template ativado utilizando a crase, e que permite utilizar tanto texto quanto códigos da linguagem escolhida<br />
    Criado chat e comunicação com websocket entre atendente e cliente<br /><br />
  
    

