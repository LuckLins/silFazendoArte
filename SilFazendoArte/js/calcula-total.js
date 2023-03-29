var titulo = document.querySelector(".titulo");
titulo.textContent = "Lista de Encomendas";

var clientes = document.querySelectorAll(".cliente");

for (var i = 0; i < clientes.length; i++) {
        estilizacao(clientes[i]);
}

function estilizacao(cliente) {

        var qtde = cliente.querySelector(".qtde").textContent;
        var val = cliente.querySelector(".unitario").textContent;

        //Verifica se a qtde é um valor válido
        if (!validaQtde(qtde)) {
                cliente.querySelector(".total").textContent = "Qtde inválida";
                console.log("A quantidade encomendada pelo(a) cliente " + cliente.querySelector(".nome").textContent + " é inválida");
                cliente.classList.add('erro');
                if (!validaUnitario(val)) {
                        cliente.querySelector(".total").textContent = "Qtde e Unitário inválidos";
                        console.log("O valor unitário do produto encomendado pelo(a) cliente " + cliente.querySelector(".nome").textContent + " é inválida");
                        cliente.classList.add('erro');

                } else {
                        cliente.querySelector(".unitario").textContent = formataValor(val);
                }
        } else {
                if (!validaUnitario(val)) {
                        cliente.querySelector(".total").textContent = "Unitário inválido";
                        console.log("O valor unitário do produto encomendado pelo(a) cliente " + cliente.querySelector(".nome").textContent + " é inválida");
                        cliente.classList.add('erro');
                } else {
                        //Calcula o total

                        //Formata o valor do total em valor monetario, de acordo com a moeda brasileira
                        cliente.querySelector(".total").textContent = calculaTotal(qtde, val);

                        //Formata o valor da tabela em valor monetario, de acordo com a moeda brasileira
                        cliente.querySelector(".unitario").textContent = formataValor(val);
                }
        }
}

function formataValor(valor) {
        return parseFloat(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });;
}

function calculaTotal(qtde, unitario) {
        return formataValor(qtde * unitario);
}
//Função que valida a qtde
function validaQtde(qtde) {
        if (!isNaN(qtde) && qtde > 0) {
                return true;
        } else {
                return false;
        }
}

function validaUnitario(unitario) {
        if (!isNaN(unitario) && unitario > 0) {
                return true;
        } else {
                return false;
        }

}