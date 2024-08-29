import express from "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autores", AutorController.listarAutores);

routes.get("/autores/:id", AutorController.buscaAutorPorId);

routes.post("/autores", AutorController.cadastrarAutor);

routes.put("/autores/:id", AutorController.atualizarAutor);
//o prefixo ":" indica que a informação é variável
//passando id como parâmtro da rota

routes.delete("/autores/:id", AutorController.deletarAutor);

export default routes;