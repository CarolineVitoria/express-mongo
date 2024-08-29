import express from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();
// as rotas no express tem precedência, logo as rotas de maior complexidade precisam estar masi acima das demais
//pra passar parametros de pesquisa basta colocar o ? e logo depois o nome do parametro = seu valor
routes.get("/livros", LivroController.listarLivros);

routes.get("/livros/busca", LivroController.buscaLivroPorEditora);

routes.get("/livros/:id", LivroController.buscaLivroPorId);

routes.post("/livros", LivroController.cadastrarLivro);

routes.put("/livros/:id", LivroController.atualizarLivro);
//o prefixo ":" indica que a informação é variável
//passando id como parâmtro da rota

routes.delete("/livros/:id", LivroController.deletarLivro);

export default routes;