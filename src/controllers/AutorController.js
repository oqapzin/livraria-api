import { autor } from "../models/Autor.js"

class AutorController {

    static async listarAutores(req, res) {
        try {
            const listarAutores = await autor.find({})
            res.status(200).json(listarAutores)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição`, })
        }
    }

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id
            const listarAutor = await autor.findById(id)
            res.status(200).json(listarAutor)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha na requisição`, })
        }
    }
    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body)
            res.status(201).json({ message: "Autor cadastrado com sucesso", autor: novoAutor })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro ao cadastrar o autor.` })
        }
    }
    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id
            const atualizarAutor = await autor.findByIdAndUpdate(id, req.body,{ new: true })

            res.status(200).json({message: "Autor atualizado com sucesso", data: atualizarAutor})
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro ao atualizar o autor.` })
        }
    }

    static async deletarAutor(req, res) {
        try {
            const id = req.params.id
            const deletarAutor = await autor.findByIdAndDelete(id)

            res.status(200).json({message: "Autor deletado com sucesso", data: deletarAutor})
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Erro ao deletar o autor.` })
        }
    }
}

export default AutorController;
