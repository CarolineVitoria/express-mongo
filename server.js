//criando um servidor http local pra conseguir publicar os dados que a api tem que fornecer
//import http from "http"; //bibloteca local do node
import "dotenv/config";
import app from './src/app.js';


//normalmente usamos o nome maiúsculas com informações fixas
const PORT =  3000; //porta de comuniação utilizada pela API

// Codificando o que irá acontecer quando criar o sevidor
/*const server = http.createServer((req,  res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Curso de express api");

}); */

//const server é a variável que guarda todas as informações do servidor

app.listen(PORT, ()=>{
    console.log("Servidor escutando");
}); //Método que vai estar ouvindo o servidor