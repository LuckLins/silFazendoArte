//Obtem o botão
var addButton = document.querySelector('#addButton');
addButton.addEventListener('click', createNewRow);

function createNewRow(event) {
        event.preventDefault();

        //Captura o formulario
        var form = document.querySelector("#form-adi");

        console.log('Campo nome: ' + form.nome.value);
        console.log('Campo quantidade: ' + form.quant.value);
        console.log('Campo produto: ' + form.product.value);
        console.log('Campo valor: ' + form.Unit.value);

        var tabel = document.querySelector(".table");

        //Atribui a nova linha na tabela
        tabel.appendChild(criaLinha(obtemEncomenda(form)));

        estilizacao(tabel.lastChild);

}

function obtemEncomenda(form){
        var encomenda = {
                nome: form.nome.value,
                produto: form.product.value,
                qtde: form.quant.value,
                unitario: form.Unit.value,
        }

        return encomenda;
}

function criaLinha(encomenda){
        //Monta a nova linha da tabela
        var linha = document.createElement("tr");

        //Monta e popula as novas colunas da tabela
        var nomeCol = criaColuna(encomenda.nome, "nome");
        var qtdeCol = criaColuna(encomenda.qtde, "qtde");
        var prodCol = criaColuna(encomenda.produto, "prod");
        var uniCol = criaColuna(encomenda.unitario, "unitario");
        var totCol = criaColuna(0, "total");
        
        //Atribui as colunas na nova linha
        linha.appendChild(nomeCol);
        linha.appendChild(prodCol);
        linha.appendChild(qtdeCol);
        linha.appendChild(uniCol);
        linha.appendChild(totCol);

        return linha;

}

function criaColuna(dados, classe){
        var td = document.createElement("td");
        td.textContent = dados;
        td.classList.add(classe);

        return td;
}
