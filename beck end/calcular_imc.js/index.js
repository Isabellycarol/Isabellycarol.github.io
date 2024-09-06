const express = require('express');
const app = express();

const calculadoraIMC = require('./calculadoraIMC');
const { efetuarCalculoIMC } = require('./calculadoraIMC');


app.get('/', (req,res)=> {
    let peso = req.query.peso;
    let altura = req.query.altura;

    if(calculadoraIMC.validaparametro(req.query.peso)&& calculadoraIMC.validaparametro(req.query.altura)){



    let imc = calculadoraIMC.efetuarCalculoIMC (peso, altura);
    let status = calculadoraIMC.retornaStatusIMC(imc);

    res.json({imc: imc, status: status});
    }

    else{
        res.status(400).json({'Erro':'peso ou altura invalidos'})
    }

});

app.listen(8080, () => {
    let data = new Date ();
    console.log("Servidor node iniciado em: " +data);
});


