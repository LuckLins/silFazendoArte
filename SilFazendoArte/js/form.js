//Obtem o botão
var addButton = document.querySelector('#addButton');
addButton.addEventListener('click', createNewRow);

function createNewRow(event) {
        event.preventDefault();
        //Captura o formulario
        var form = document.querySelector("#form-adi");
        var tabel = document.querySelector(".table");

        //Valida o formulario
        var validacao = validaForm(obtemEncomenda(form))

        if(validacao.length > 0){
                removeMensagemErro();
                exibeMensagemErro(validacao);
                return;
        }else{
                removeMensagemErro();
        }


        //Atribui a nova linha na tabela
        tabel.appendChild(criaLinha(obtemEncomenda(form)));
        //limpa o formulario
        form.reset();

        
        //estilizacao(tabel.lastChild);

}

function obtemEncomenda(form) {
        var encomenda = {
                nome: form.nome.value,
                produto: form.product.value,
                qtde: form.quant.value,
                unitario: form.Unit.value,
                //unitario: formataValor(form.Unit.value),
                total: calculaTotal(form.quant.value, form.Unit.value),
        }

        return encomenda;
}

function criaLinha(encomenda) {
        //Monta a nova linha da tabela
        var linha = document.createElement("tr");

        //Atribui as colunas na nova linha
        linha.appendChild(criaColuna(encomenda.nome, "nome"));
        linha.appendChild(criaColuna(encomenda.produto, "prod"));
        linha.appendChild(criaColuna(encomenda.qtde, "qtde"));
        linha.appendChild(criaColuna(formataValor(encomenda.unitario), "unitario"));
        linha.appendChild(criaColuna(encomenda.total, "total"));

        return linha;

}

function criaColuna(dados, classe) {
        var td = document.createElement("td");
        td.textContent = dados;
        td.classList.add(classe);

        return td;
}

function validaForm(encomenda) {
        var erros = [];

        if (!validaQtde(encomenda.qtde)) {
                erros.push("A quantidade é inválida");
        }
        if(!validaUnitario(encomenda.unitario)){
                erros.push("O valor unitário é inválido");
        }
        if(encomenda.nome == ""){
                erros.push("O Nome é inválido");
        }
        if(encomenda.produto == "Selecione"){
                erros.push("Selecione um produto");
        }
        return erros;
}

function exibeMensagemErro(erros){
        var ul = document.querySelector("#mensagens-erro");

        erros.forEach(function(erro){
                var li = document.createElement("li");
                li.textContent = erro;
                ul.appendChild(li);
        });
}

function removeMensagemErro(){
        var ul = document.querySelector("#mensagens-erro");
        ul.textContent = "";
}