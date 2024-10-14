import express from "express"
import livros from "./LivroRouter.js"
import autores from "./AutorRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Livraria Alura"))
    app.use(express.json(), livros, autores)
}

export default routes