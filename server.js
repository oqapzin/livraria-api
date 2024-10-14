import app from "./src/app.js"

let listener = app.listen(process.env.API_PORT || 3000, () => {
    console.log("Servidor iniciado na porta "+listener.address().port)
})