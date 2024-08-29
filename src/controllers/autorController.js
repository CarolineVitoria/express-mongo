import { autor } from "../models/Autor.js";
//a função do controlador é trabalhar na parte de requisiçao e resposta

class AutorController {
    static async listarAutores (req, res){
        try {
            const listaAutores = await autor.find({});//busca tudo o que estiver na coleção (autores)
            res.status(200).json(listaAutores); 
        } catch (error) {

        }

    };

    static async buscaAutorPorId (req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição`})
        }
    }
    static async cadastrarAutor (req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", autor:novoAutor}); //201 registro criado com sucesso
            //novolivro vai ser o retorno do método create(método do moongose para criar um novo documento)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor` })
        }
    };
    static async atualizarAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "autor atualizado" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição`})
        }
    };
    static async deletarAutor (req, res){
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro deletado com sucesso" })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na exclusão`})
        }
        }
};

export default AutorController;