        var titulo = document.querySelector(".titulo");
        titulo.textContent = "Lista de Encomendas";

//ROTINA DE CALCULO DO VALOR TOTAL
//Captura os dados do cliente
var cliente = document.querySelector(".cliente");

//Captura a qtde da encomenda
var qtde = cliente.querySelector(".qtde").textContent;

console.log(qtde);

//Captura o valor unitario
var val = cliente.querySelector(".unitario").textContent.split(" ");
var num = val[1];
var numC = num.split(",");
var numCer = numC[0];

var mult =numCer*qtde;
console.log(mult);