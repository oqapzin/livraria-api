import { autor } from "../models/Autor.js"

class AutorController {

    static async listarAutores(req, res, next) {
        try {
            const listarAutores = await autor.find({})
            res.status(200).json(listarAutores)
        } catch (error) {
            next(error)
        }
    }

    static async listarAutorPorId(req, res, next) {
        try {
            const id = req.params.id
            const listarAutor = await autor.findById(id)
            res.status(200).json(listarAutor)
        } catch (error) {
            next(error)
        }
    }
    static async cadastrarAutor(req, res, next) {
        try {
            const novoAutor = await autor.create(req.body)
            res.status(201).json({ message: "Autor cadastrado com sucesso", autor: novoAutor })
        } catch (error) {
            next(error)
        }
    }
    static async atualizarAutor(req, res, next) {
        try {
            const id = req.params.id
            const atualizarAutor = await autor.findByIdAndUpdate(id, req.body,{ new: true })

            res.status(200).json({message: "Autor atualizado com sucesso", data: atualizarAutor})
        } catch (error) {
            next(error)
        }
    }

    static async deletarAutor(req, res, next) {
        try {
            const id = req.params.id
            const deletarAutor = await autor.findByIdAndDelete(id)

            res.status(200).json({message: "Autor deletado com sucesso", data: deletarAutor})
        } catch (error) {
            next(error)
        }
    }
}

export default AutorController;
