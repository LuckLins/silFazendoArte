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
        if (isNaN(qtde)) {
                cliente.querySelector(".total").textContent = "Qtde inválida";
                console.log("A quantidade encomendada pelo(a) cliente " + cliente.querySelector(".nome").textContent + " é inválida");
                cliente.classList.add('erro');
                if (isNaN(val)) {
                        cliente.querySelector(".total").textContent = "Qtde e Unitário inválidos";
                        console.log("O valor unitário do produto encomendado pelo(a) cliente " + cliente.querySelector(".nome").textContent + " é inválida");
                        cliente.classList.add('erro');

                } else {
                        cliente.querySelector(".unitario").textContent = parseFloat(val).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                }
        } else {
                if (isNaN(val)) {
                        cliente.querySelector(".total").textContent = "Unitário inválido";
                        console.log("O valor unitário do produto encomendado pelo(a) cliente " + cliente.querySelector(".nome").textContent + " é inválida");
                        cliente.classList.add('erro');
                } else {
                        var total = val * qtde;

                        //Formata o valor da tabela em valor monetario, de acordo com a moeda brasileira
                        cliente.querySelector(".total").textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

                        //var unit = val * 1;
                        //clientes[i].querySelector(".unitario").textContent = unit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                        //Formata o valor da tabela em valor monetario, de acordo com a moeda brasileira
                        cliente.querySelector(".unitario").textContent = parseFloat(val).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                }
        }
}