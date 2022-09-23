import express from 'express'
//node --experimental-modules src/server.mjs
const app = express() //chamar a função

app.get('/ads', (request, response) => {
    //estamos usando o "response" do express para enviar um texto
    return response.json([
            { id: 1, name: "reynan" },
            { id: 2, name: "weber" },
            { id: 3, name: "pedro" },
        ]) //json retorna varias coisas
})

app.listen(3334) //minha porta