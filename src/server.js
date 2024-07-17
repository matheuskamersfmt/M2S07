const express = require("express");
const cors = require("cors");
const connection = require("./database/connection");
const routes = require("./routes/routes");

class Server {
  constructor(server = express()) {
    this.middlewares(server);
    this.database();
    server.use(routes);
    this.initilizeServer(server);
  }

  async middlewares(server) {
    server.use(cors());
    server.use(express.json());
  }

  async database() {
    try {
      await connection.authenticate();
      console.log("Conectado ao banco de dados com sucesso!");
    } catch (error) {
      console.log("Erro ao conectar ao banco de dados: ", error);
    }
  }

  async initilizeServer(server) {
    const port = process.env.PORT || 8000;
    server.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  }
}

module.exports = { Server };
