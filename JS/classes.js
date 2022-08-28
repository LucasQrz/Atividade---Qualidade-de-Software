class Contato{
    constructor(nome, telefone){
        this._nome = nome;
        this._telefone = telefone;
    }
}


class Agenda{
    constructor(){
        this._listaDeContatos = [];
    }

    adicionarContato(contato){
        this._listaDeContatos.push(contato);
    }
    
}






