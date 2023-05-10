//Obtem o botão
var addButton = document.querySelector('#addInsum');
addButton.addEventListener('click', createNewRow);

function createNewRow(event) {
        event.preventDefault();
        //Captura o formulario
        var form = document.querySelector("#form-adi");
        var tabel = document.querySelector("tbody");

        //Atribui a nova linha na tabela
        tabel.appendChild(criaLinha(obtemEncomenda(form)));
        //limpa o formulario
        form.reset();


}

function obtemEncomenda(form) {
        var encomenda = {
                insumo: form.insumo.value,
                qtdeInsumo: form.quantInsu.value,
                qtdeEmbalagem: form.quantEmb.value,
                valor: form.valor.value,
        }

        return encomenda;
}

function criaLinha(encomenda) {
        //Monta a nova linha da tabela
        var linha = document.createElement("tr");
        linha.classList.add(".linha");
        
        //Atribui as colunas na nova linha
        linha.appendChild(criaColuna(encomenda.insumo, "insumo"));
        linha.appendChild(criaColuna(encomenda.qtdeInsumo, "qtdeInsu"));
        linha.appendChild(criaColuna(encomenda.qtdeEmbalagem, "qtdeEmb"));
        linha.appendChild(criaColuna(formataValor(encomenda.valor), "valor"));
        linha.appendChild(criaColuna(formataValor(calculaInsumo(encomenda.qtdeInsumo,encomenda.qtdeEmbalagem,encomenda.valor)), "resultado"));


        return linha;
}

function criaColuna(dados, classe) {
        var td = document.createElement("td");
        td.textContent = dados;
        td.classList.add(classe);

        return td;
}

function formataValor(valor) {
    return parseFloat(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function calculaInsumo(qtdeInsum,qtdeEmba,val){
        var valUnit = val/qtdeEmba;
        var gasto = valUnit*qtdeInsum
        
        return gasto;
}

