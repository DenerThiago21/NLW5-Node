# NLW5-Node
Estudos do NLW05 - trilha de node.js {instrutora: Dani Evangelista}

<b>Primeiro dia</b>:
  <p>Instalação e configuração do ambiente;</p>
    Configurado o typeScript;<br />
    Configurado Express - microframework que auxiliará na criação de rotas dentro da aplicação;<br />
    Instalado e configurado o Insomnia para fazer requisições dos mais variados tipos;
    O que são e para que servem os verbos HTTP(GET{busca}; POST{criação}; PUT{alteração}; DELETE{deletar/apagar}; PATCH{alterar informação específica})

  Criado as primeiras requisições para teste {GET e POST}

Segundo dia:
  Explicação das formas que podemos utilizar um banco de dados dentro de uma aplicação:
    Driver Nativo - {Exige conhecimento da linguagem do banco de dados escolhido, ou seja escreve-se as querys puras dentro do código};
    Query Builder(knex.js) - {cria um padrão para consultas, facilita a vida, caso haja uma troca no DB não é preciso reescrever todas as querys novamente};
    ORM(TypeORM ou Sequelize) - {faz o mapeamento de objetos para entidade no banco de dados, a grosso modo replica classes para o banco de dados};
  
  Instalado e configurado o ambiente de banco de dados:
    TypeORM, SQLite3, reflect-metadata
  
