import mongoose from "mongoose";
import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res, next) {
        try {

            const listarLivros = await livro.find({})
            res.status(200).json(listarLivros)
        } catch (error) {
            next(error)
        }
    }

    static async listarLivroPorId(req, res, next) { 
        try {
            const id = req.params.id
            const listaLivro = await livro.findById(id).populate("autor", "nome").exec();

            if (listaLivro !== null) {
                res.status(200).send(listaLivro);
            } else {
                res.status(404).send({ message: "Livro inexistente" });
            }
        } catch (error) {
           next(error)
        }
    }
    static async listarLivroPorEditora(req, res, next) {
        try {
            const editora = req.query.editora
          
            const listaLivros = await livro.find({ editora: { $regex: editora, $options: 'mi' } })
            if (listaLivros !== null) {
                res.status(200).send(listaLivros);
            } else {
                res.status(404).send({ message: "Livro inexistente" });
            }
            res.status(200).json(listaLivros)
        } catch (error) {
            next(error)

        }
    }

    static async cadastrarLivro(req, res, next) {
        const novoLivro = req.body
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor)
            if (!autorEncontrado) {
                return res.status(404).json({ message: "Autor não encontrado" });
            }

            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado } }
            const livroNovo = await livro.create(livroCompleto)
            res.status(201).json({ message: "Livro cadastrado com sucesso", livro: livroNovo })
        } catch (error) {
            next(error)
        }
    }
    static async atualizarLivro(req, res, next) {
        try {
            const id = req.params.id
            const atualizarlivro = await livro.findByIdAndUpdate(id, req.body, { new: true })
            if (!livroAtualizado) {
                return res.status(404).json({ message: "Livro não encontrado" });
            }
            
            res.status(200).json({ message: "Livro atualizado com sucesso", data: atualizarlivro })
        } catch (error) {
            next(error)
        }
    }

    static async deletarLivro(req, res, next) {
        try {
            const id = req.params.id
            const deletarLivro = await livro.findByIdAndDelete(id)

            res.status(200).json({ message: "Livro deletado com sucesso", data: deletarLivro })
        } catch (error) {
            next(error)
        }
    }
}

export default LivroController;
