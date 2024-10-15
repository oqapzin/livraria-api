import ErrorBase from "./errorBase.js";

class IncorretRequest extends ErrorBase {
    constructor() {
        super("Um ou mais dados fornecidos estão incorretos.",400);
    }
}

export default IncorretRequest