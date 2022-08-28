class AgendaView{
    constructor(){}

    exibirListaDeContatos(agenda, listaHTML){
        
        let contatosEmHTML = "";

        for(let i = 0; i < agenda._listaDeContatos.length; i++){
            contatosEmHTML += "<li>" + agenda._listaDeContatos[i]._nome + " - " + agenda._listaDeContatos[i]._telefone + "</li>"; 
        }

        listaHTML.innerHTML =  contatosEmHTML;
    }
}