import mongoose from "mongoose";
import ErrorBase from "../errors/errorBase.js"
import IncorretRequest from "../errors/incorretRequest.js"
import ValidationError from "../errors/validationError.js";

export function errorManiputalor(error,req,res,next){
    if (error instanceof mongoose.Error.CastError) {
        //res.status(400).send({message: "Um ou mais dados fornecidos estão incorretos."});
        new IncorretRequest().enviarResposta(res)
    } else if(error instanceof mongoose.Error.ValidationError) {
        new ValidationError(error).enviarResposta(res)
    } else {
        //res.status(500).send({message: "Erro interno de servidor."});
        new ErrorBase().enviarResposta(res);
    }
}