function error404(req,res,next) {
    res.status(404).send({message: "Página não encontrada"})
}

export default error404