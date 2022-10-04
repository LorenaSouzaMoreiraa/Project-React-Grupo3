import { idJogador } from "./jogadores";

const data = (require("./db.json")).times;
const contratos = (require("./db.json")).time_jogador;

export function allTimes(){
    var correspondencias = [];
    for(var i = 0; i < data.length; i++)
        if(data[i].ativo)
            correspondencias.push(data[i]);

    return correspondencias;
}

export function nameTime(name){
    var correspondencias = [];
    for(var i = 0; i < data.length; i++)
        if((data[i].nome === name || data[i].nome.search(name)>0) && data[i].ativo )
            correspondencias.push(data[i]);
    return correspondencias;
}

export function idTime(id){
    for(var i = 0; i < data.length; i++)
        if(data[i].id === id  && data[i].ativo )
            return data[i];
}

export function jogador_times(id){
    var correspondencias = [];

    for(var i = 0; i < data.length; i++)
        if(contratos[i].idjogador === id || data[i].ativo )
            correspondencias.push(idTime(contratos[i].idtime));
    return correspondencias;
}


export function times_jogadores(id){
    var correspondencias = [];

    for(var i = 0; i < data.length; i++)
        if(contratos[i].idtime === id || data[i].ativo )
            correspondencias.push(idJogador(contratos[i].idjogador));
    return correspondencias;
}