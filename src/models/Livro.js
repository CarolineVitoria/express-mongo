import mongoose, { mongo } from "mongoose";
import { autorSchema } from "./Autor.js";
//criando o modelo do documento(livro) baseado nos métodos do mogoose

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId }, //criação de id único
    titulo: { type: String, required: true},
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number},
    autor: autorSchema
}, {versionKey: false});
//objeto de configuração para o mongoose saber e definir a estrutura e propriedade do documento(nessa caso livro)

const livro = mongoose.model("livros", livroSchema);
//primeiro parâmetro se refere a o nome da coleção

export default livro;

