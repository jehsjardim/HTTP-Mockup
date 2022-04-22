var express = require("express");
var aplicacao = express();

aplicacao.use(express.json());
aplicacao.use(express.urlencoded({extended: false}));

aplicacao.get('/', function (req, res) {
    //res.send("<h1>Olá Mundo</h1>");
    res.json({
        numero:"1"
    })
});

aplicacao.post('/', function (req, res) {
    console.log(req.body.Nome);
});

aplicacao.listen(3000, function() {
    console.log("Estou Funcionando");
});