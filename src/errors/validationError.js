import IncorretRequest from "./incorretRequest.js";

class ValidationError extends IncorretRequest {
    constructor(error) {
        const errorMessage = Object.values(error.errors).map(erro => erro.message).join("; ")


        super(`Os seguintes erros foram encontrados: ${errorMessage}`,400)
    }
}

export default ValidationError