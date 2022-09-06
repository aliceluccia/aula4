const express = require ('express')
const app = express ()
//aplicando middleware
app.use(express.json())
let contador = 0


const lembretes = {}
//GET obter a lista de lembretes
//localhost: 4000 lembretes
app.get('/lembretes', (req, res) => {
    res.send(lembretes)
})

//POST cadastrar um lembrete novo
//localhost: 4000 lembretes
//{texto: 'Fazer café'}
app.post('/lembretes', (req, res) => {
    contador++ 
    const texto = req.body.texto
    lembretes[contador] = {contador, texto}
    res.status(201).end()
})

app.listen(4000, () => {
    console.log('Lembretes. Porta 4000')
})