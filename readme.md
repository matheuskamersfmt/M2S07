## Semana 07 - Express Avançado

## Rodar o repositório:
## Na primeira vez é necessário instalar as dependencias:
  npm install
  cp .env_example .env

##  Para rodar o repositório em ambiente local:
npm run dev

##  Trabalhando com migrations:
## Criar uma migration:
Opção nº 1: sequelize migration:generate --name nome_da_migracao
Opção nº 2: npx sequelize-cli migration:generate --name criar_tabela_alunos

## Rodar uma migration. Opções:
Opção nº 1: sequelize db:migrate
Opção nº 2: npx sequelize db:migrate

##  Reverter a última migration:
Opção nº 1: sequelize-cli db:migrate:undo
Opção nº 2: npx sequelize-cli db:migrate:undo

##  Reverter todas as migrations:
Opção nº 1: sequelize-cli db:migrate:undo:all
Opção nº 2: npx sequelize-cli db:migrate:undo:all

## Trabalhando com Seeders
Executar o seeders para gerar valores iniciais no banco de dados:
Opção nº 1: sequelize db:seed:all
Opção nº 2: npx sequelize db:seed:all

##  Documentação do Sequelize:
https://sequelize.org/docs/v6/core-concepts/model-basics/

##  Bibliotecas utilizadas:
instalar o sequelize
npm install sequelize

## Instalar o driver do PostgreSQL
npm install pg

## Instalar o CLI do sequelize
npm install -g sequelize-cli

## Instalar o dotenv
npm install dotenv

## Instalar o JsonWebToken ( JWT )
npm install jsonwebtoken

## Instalar o axios
npm install axios