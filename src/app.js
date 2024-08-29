import express from "express"; //importando toda biblioteca que foi instalada com npm, assim trazendo os métodos
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();//instância da conexão

conexao.on("error", (erro) =>{
    console.error("error de conexão", erro);
});
//lidar com erros na conexão incial
conexao.once("open", ()=>{
    console.log("Conexão com o banco feita com sucesso");
})//evento de conexão aberta

const app = express(); //instância do express
routes(app);


// app.get("/livros/:id", (req, res) => {
//     const index = buscaLivro(req.params.id);
//     if (index === -1) {
//         res.status(404).send('Livro não encontrado');
//     } else {
//         res.status(200).json(livros[index]);
//     }
// });


// o próprio express cria o req e o res


export default app;
