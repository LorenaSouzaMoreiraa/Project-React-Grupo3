const data = (require("./db.json")).times;

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
