const express = require('express')

const app = express()

app.listen('3000')

//TRABALHANDO COM POST *********************
//app.route('/').post((req, res) => res.send(req.body))

//middleware
//app.use(express.json())


// TRABALHANDO COM GET *********************
//app.route('/').get((req, res) => res.send("Hello"))
//app.route('/sobre').get((req, res) => res.send("Hello Sobre"))
//req = requisição
//res = resposta

//TRABALHANDO COM PUT *********************

//middleware
//app.use(express.json())

//let author = 'Helio F.'

//app.route('/').get( (req, res) => res.send(author))

//app.route('/').put((req, res) =>{
//    author = req.body.author
//    res.send(author)
//})

//TRABALHANDO COM DELETE

//middleware
app.use(express.json())

let author = 'Helio F.'

app.route('/:identificador').delete((req, res) => {
    res.send(req.params.identificador)
})
