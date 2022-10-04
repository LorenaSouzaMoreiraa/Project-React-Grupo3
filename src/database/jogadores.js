
const data = (require("./db.json")).jogadores;

export function allJogadores(){
    var correspondencias = [];
    for(var i = 0; i < data.length; i++)
        if(data[i].ativo)
            correspondencias.push(data[i]);

    return correspondencias;
}

export function nameJogador(name){
    var correspondencias = [];
    for(var i = 0; i < data.length; i++)
        if((data[i].nome === name || data[i].nome.search(name)>0) && data[i].ativo )
            correspondencias.push(data[i]);
    return correspondencias;
}

export function times_jogador(id){
    var correspondencias = [];
    
    for(var i = 0; i < data.length; i++)
        if((data[i].time === name || data[i].nome.search(name)>0) && data[i].ativo )
            correspondencias.push(data[i]);
    return correspondencias;
}