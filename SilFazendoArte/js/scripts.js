var titulo = document.querySelector(".titulo");
titulo.textContent = "Lista de Encomendas";


var clientes = document.querySelectorAll(".cliente");
//console.log(clientes);

for (var i = 0; i < clientes.length; i++) {
        //console.log("qtde : " + clientes[i].querySelector(".qtde").textContent);
        //console.log("unitario : " + clientes[i].querySelector(".unitario").textContent);
        var qtde = clientes[i].querySelector(".qtde").textContent;
        var val = clientes[i].querySelector(".unitario").textContent;

        //Verifica se a qtde é um valor válido
        if (isNaN(qtde)) {
                clientes[i].querySelector(".qtde").textContent = "Qtde inválida";
                console.log("A quantidade encomendada pelo(a) cliente " + clientes[i].querySelector(".nome").textContent + " é inválida");
                clientes[i].querySelector(".qtde").parentElement.style.color = 'red';
                if (isNaN(val)) {
                        clientes[i].querySelector(".unitario").textContent = "Unitário inválido";
                        console.log("O valor unitário do produto encomendado pelo(a) cliente " + clientes[i].querySelector(".nome").textContent + " é inválida");
                        clientes[i].querySelector(".unitario").parentElement.style.color = 'red';

                } else {
                        clientes[i].querySelector(".unitario").textContent = parseFloat(val).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                }
        } else {
                if (isNaN(val)) {
                        clientes[i].querySelector(".unitario").textContent = "Unitário inválido";
                        console.log("O valor unitário do produto encomendado pelo(a) cliente " + clientes[i].querySelector(".nome").textContent + " é inválida");
                        clientes[i].querySelector(".unitario").parentElement.style.color = 'red';
                } else {
                        var total = val * qtde;

                        //Formata o valor da tabela em valor monetario, de acordo com a moeda brasileira
                        clientes[i].querySelector(".total").textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

                        //var unit = val * 1;
                        //clientes[i].querySelector(".unitario").textContent = unit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                        //Formata o valor da tabela em valor monetario, de acordo com a moeda brasileira
                        clientes[i].querySelector(".unitario").textContent = parseFloat(val).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
                }


        }
}