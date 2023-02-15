var titulo = document.querySelector(".titulo");
titulo.textContent = "Lista de Encomendas";


//ROTINA DE CALCULO DO VALOR TOTAL
//Captura os dados do cliente
//var cliente = document.querySelector(".cliente");

//Captura a qtde da encomenda
//var qtde = cliente.querySelector(".qtde").textContent;

//console.log(qtde);

//Captura o valor unitario
//var val = cliente.querySelector(".unitario").textContent;
//var val = cliente.querySelector(".unitario").textContent.split(" ");
//var num = val[1];
//var numDiv = num.split(",");
//var numCer = numDiv[0];

//Multiplica o valor unitario pela quantidade e mostra o resultado no console
//var total =numCer*qtde;
//var total = val*qtde;
//console.log(total);

//cliente.querySelector(".total").textContent = total;

//=======================================

//var cliente = document.querySelector(".cliente2");
//var qtde = cliente.querySelector(".qtde2").textContent;
//var val = cliente.querySelector(".unitario2").textContent;
//var total = val*qtde;
//cliente.querySelector(".total2").textContent = total;

//=======================================

//var cliente = document.querySelector(".cliente3");
//var qtde = cliente.querySelector(".qtde3").textContent;
//var val = cliente.querySelector(".unitario3").textContent;
//var total = val*qtde;
//cliente.querySelector(".total3").textContent = total;

//=======================================

//var cliente = document.querySelector(".cliente4");
//var qtde = cliente.querySelector(".qtde4").textContent;
//var val = cliente.querySelector(".unitario4").textContent;
//var total = val*qtde;
//cliente.querySelector(".total4").textContent = total;

var clientes = document.querySelectorAll(".cliente")
console.log(clientes)

for (var i = 0; i < clientes.length; i++) {
        //console.log("qtde : " + clientes[i].querySelector(".qtde").textContent);
        //console.log("unitario : " + clientes[i].querySelector(".unitario").textContent);
        var qtde = clientes[i].querySelector(".qtde").textContent;
        var val = clientes[i].querySelector(".unitario").textContent;
        var total = val * qtde;
        clientes[i].querySelector(".total").textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
           
}