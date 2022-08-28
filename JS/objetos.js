//Pegando elementos do HTML e jogando em variáveis/objetos. ---------------------------
let inputNome = document.getElementById("inputNome");
let inputTelefone = document.getElementById("inputTelefone");
let botaoAdicionar = document.getElementById("btnAdicionar");
let listaDeContatosHTML = document.getElementById("listaDeContatos");


//Objetos ------------------------------------
let agenda = new Agenda();
let agendaView = new AgendaView();


//Código relacionado ao botão Adicionar ---------------------------------------

function limparFormulario(){
    inputNome.value = "";
    inputTelefone.value = "";
}

function quandoClicarNoBotaoAdicionar() {

    if(inputNome.value != ""){

        let contatinho = new Contato(inputNome.value, inputTelefone.value); 
        agenda.adicionarContato(contatinho);

        agendaView.exibirListaDeContatos(agenda, listaDeContatosHTML);
        limparFormulario();
    } else {
        alert("O campo 'Nome' não pode estar vazio!");
    }

}

botaoAdicionar.addEventListener("click", quandoClicarNoBotaoAdicionar);

//Fim do código relacionado ao botão Adicionar ------------------------------