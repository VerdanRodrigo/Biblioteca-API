import{ Autor }from "../models/autor.js";


class AutorController {
    static async listarAutores(_req, res) {
        try {
            const listaAutores = await Autor.find({});
            res.status(200).json(listaAutores);
        } catch (erro) {
            res.status(500).json({ messege: `${erro.messege} - falha na requisição!` });
        };
    };

    static async listarAutorId(req, res) {
        try {
            const id = req.params.id 
            const AutorEncontrado = await Autor.findById(id);
            res.status(200).json(AutorEncontrado);
        } catch (erro) {
            res.status(500).json({ messege: `${erro.messege} - falha na requisição do Autor!` });
        };
    };

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await Autor.create(req.body);
            res.status(201).json({ messege: "Autor cadastrado com sucesso!", Autor: novoAutor });
        } catch (erro) {
            res.status(500).json({ messege: `${erro.messege} - Falha ao cadastrar Autor!` })
        }


    }
    
    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id 
             await Autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({messege: "Autor atualizado!"});
        } catch (erro) {
            res.status(500).json({ messege: `${erro.messege} - falha na atualização do Autor!` });
        };
    };

    static async deletarAutor(req, res) {
        try {
            const id = req.params.id 
             await Autor.findOneAndDelete(id);
            res.status(200).json({messege: "Autor deletado!"});
        } catch (erro) {
            res.status(500).json({ messege: `${erro.messege} - Autor não deletado!` });
        };
    };

};




export default AutorController;