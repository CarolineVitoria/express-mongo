import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";
autor

//a função do controlador é trabalhar na parte de requisiçao e resposta

class LivroController {
    static async listarLivros (req, res){
        try {
            const listaLivros = await livro.find({});//busca tudo o que estiver na coleção (livros)
            res.status(200).json(listaLivros); 
        } catch (error) {

        }

    };

    static async buscaLivroPorId (req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição`})
        }
    }
    static async cadastrarLivro (req, res) {
        const livroBody = req.body;
        try {
            const autorEncontrado = await autor.findById(livroBody.autor);
            const livroCompleto = { ...livroBody, autor: {...autorEncontrado._doc}}
            const livroCriado =  await livro.create(livroCompleto)
            res.status(201).json({ message: "Criado com sucesso", livro:livroCriado}); //201 registro criado com sucesso
            //novolivro vai ser o retorno do método create(método do moongose para criar um novo documento)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` })
        }
    };
    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado" });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição`})
        }
    };
    static async deletarLivro (req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro deletado com sucesso" })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na exclusão`})
        }
        };
        static async buscaLivroPorEditora (req, res){
            const editora = req.query.editora;
            try {
                const livrosEncontrados = await livro.find({editora: editora});
                res.status(200).json({ message: livrosEncontrados });
            } catch (error) {
                res.status(500).json({message:`${error.message}-"falha na pesquisa"`});
            }
        }
};

export default LivroController;