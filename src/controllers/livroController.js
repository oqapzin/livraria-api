import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listarLivros = await livro.find({})
            res.status(200).json(listarLivros)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição`, })
        }
    }

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id
            const listaLivro = await livro.findById(id)
            res.status(200).json(listaLivro)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição`, })
        }
    }
    static async listarLivroPorEditora(req, res) {
        try {
            const editora = req.query.editora
            const listaLivro = await livro.find({ editora: { $regex: editora, $options: 'mi' } })
            res.status(200).json(listaLivro)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição`, })
        }
    }

    static async cadastrarLivro(req, res) {
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
            res.status(500).json({ message: `${error.message} - Erro ao cadastrar o livro.` })
        }
    }
    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id
            const atualizarlivro = await livro.findByIdAndUpdate(id, req.body, { new: true })
            if (!livroAtualizado) {
                return res.status(404).json({ message: "Livro não encontrado" });
            }
            
            res.status(200).json({ message: "Livro atualizado com sucesso", data: atualizarlivro })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro ao atualizar o livro.` })
        }
    }

    static async deletarLivro(req, res) {
        try {
            const id = req.params.id
            const deletarLivro = await livro.findByIdAndDelete(id)

            res.status(200).json({ message: "Livro deletado com sucesso", data: deletarLivro })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro ao deletar o livro.` })
        }
    }
}

export default LivroController;
