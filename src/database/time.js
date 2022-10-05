import { id_Jogador } from "./jogadores";

const data = (require("./db.json")).times;
const contratos = (require("./db.json")).time_jogador;
const cidades = (require("./db.json")).cidades;
const esportes = (require("./db.json")).esportes;

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

export function id_Time(id){
    for(var i = 0; i < data.length; i++)
        if(data[i].id === id  && data[i].ativo )
            return data[i];
}

export function allCidades(){
    var correspondencias;

    for(var i = 0; i < cidades.length; i++)
        if(cidades[i].ativo )
            correspondencias.push(cidades[i]);

    return correspondencias;
}

export function id_Cidade(id){
    for(var i = 0; i < cidades.length; i++)
        if(cidades[i].id === id  && cidades[i].ativo )
            return cidades[i];
}

export function allEsportes(){
    var correspondencias;

    for(var i = 0; i < esportes.length; i++)
        if(esportes[i].ativo )
            correspondencias.push(esportes[i]);

    return correspondencias;
}

export function id_Esporte(id){
    for(var i = 0; i < esportes.length; i++)
        if(esportes[i].id === id  && esportes[i].ativo )
            return esportes[i];
}

export function jogador_times(id){
    var correspondencias = [];

    for(var i = 0; i < contratos.length; i++)
        if(contratos[i].idjogador === id || contratos[i].ativo )
            correspondencias.push(id_Time(contratos[i].idtime));
    return correspondencias;
}

export function times_jogadores(id){
    var correspondencias = [];

    for(var i = 0; i < contratos.length; i++)
        if(contratos[i].idtime === id || data[i].ativo )
            correspondencias.push(id_Jogador(contratos[i].idjogador));
    return correspondencias;
}
