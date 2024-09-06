function efetuarCalculoIMC(peso,altura){
    let imc = peso / (altura*altura);
    return imc;
}

function retornaStatusIMC(imc)
{
    let status;

    if(imc < 18.5)
    {
        status = 'abaixo do peso';
    }
    else if(imc => 18.5 && imc < 24.9)
    {
        status= 'peso normal';
    }
    else if (imc >= 24.9 && imc < 30)
    {
        status = 'acima do peso';
    }
    else
    {
        status = 'obesa';
    }
    return status;
}

function validaparametro(parametro){
    if(isNaN(parametro))
    {
        return false;
    }
    else
    {
        return true;
    }
}



exports.efetuarCalculoIMC = efetuarCalculoIMC;
exports.retornaStatusIMC = retornaStatusIMC;
exports.validaparametro = validaparametro;


