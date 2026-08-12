const prompt = require("prompt-sync")();

function conversaoParaNumero(partes){
    for (let i = 0; i < partes.length; i++){
        partes[i] = Number(partes[i]);
    }
}

function eBissexto(ano){
    if((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
        return 29;
    } else {
        return 28;
    }
}

function eBissextoTernario(ano){
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

function validarData(data){
    const partes = data.split('/');
    
    if(partes.length !== 3)
        return false;

    if(partes[0].length > 2 || partes[1].length > 2 || partes[2].length > 4)
        return false;

    conversaoParaNumero(partes);


    let dia = partes[0];
    let mes = partes[1];
    let ano = partes[2];
    
    if(isNaN(dia) || isNaN(mes) || isNaN(ano))
        return false;

    if(mes < 1 || mes > 12)
        return false;

    if(dia < 1 || dia > 31)
        return false;

    const DIAS_DO_MES = [31, eBissexto(ano), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Opcional: Você pode manter apenas uma das duas listas
    const DIAS_DO_MES_T = [31, eBissextoTernario(ano) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(dia > DIAS_DO_MES[mes-1])
        return false;

  
    return true;
}

input = prompt ("Digite uma data no formato dd/mm/aaaa:");
console.log(validarData(input));