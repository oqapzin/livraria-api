import mongoose from "mongoose";

export function errorManiputalor(error,req,res,next){
    if (error instanceof mongoose.Error.CastError) {
        res.status(400).send({message: "Um ou mais dados fornecidos estão incorretos."});
    } else if(error instanceof mongoose.Error.ValidationError) {
        const errorMessage = Object.values(error.errors).map(erro => erro.message).join("; ")
        res.status(400).send({message: `Os seguintes erros foram encontrados: ${errorMessage}`});
    } else {
        res.status(500).send({message: "Erro interno de servidor."});
    }
}