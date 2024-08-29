//ponto de entrada das rotas, é aqui onde o resto da aplicação vai acessar

import express from "express";
import livros from "./livrosRoutes.js"
import autores from "./autoresRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res)=> res.status(200).send("Curso de Node.js"));

    app.use(express.json(), livros, autores);
    //middleware, no express são utilizados para ter acesso as req e res no momento que estão sendo feitas e fazer algumas acões nelas, mofidificar um objeto passar informações extras. 
//nesse middlware(express.json), qualquer requisição com corpo parecido com json ele será convertido pra json. É necessário pq os dados viajam na conexão http no tipo string, mesmo estando no formato de objeto js e para acessar os dados precisamos que ele estaja em json

};

export default routes;
//agrupa todas as rotas