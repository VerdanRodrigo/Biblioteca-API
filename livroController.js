import { Autor } from "../models/autor.js";
import Livro from "../models/livro.js";

class LivroController {
    static async listarLivros (req, res) {
        try {
          const listaLivros = await Livro.find({}).populate("autor").exec();
          res.status(200).json(listaLivros);
        } catch (erro) {
          res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
      };
     
    static async listarLivroId(req, res) {
        try {
            const id = req.params.id
            const livroEncontrado = await Livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ messege: `${erro.messege} - falha na requisição do livro!` });
        };
    };

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        try {
            const AutorEncontrado = await Autor.findById(novoLivro.Autor);
            const livroCompleto = { ...novoLivro, Autor: { ...AutorEncontrado } };
            res.status(201).json({ messege: "Livro cadastrado com sucesso!", livro: novoLivro });
        } catch (erro) {
            res.status(500).json({ messege: `${erro.messege} - Falha ao cadastrar Livro!` })
        }


    }

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id
            await Livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ messege: "Livro atualizado!" });
        } catch (erro) {
            res.status(500).json({ messege: `${erro.messege} - falha na atualização do livro!` });
        };
    };

    static async deletarLivro(req, res) {
        try {
            const id = req.params.id
            await Livro.findOneAndDelete(id);
            res.status(200).json({ messege: "Livro deletado!" });
        } catch (erro) {
            res.status(500).json({ messege: `${erro.messege} - Livro não deletado!` });
        };
    };
};



export default LivroController;