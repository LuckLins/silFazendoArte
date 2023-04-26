 var addButton = document.querySelector('#procura_encomenda');

 addButton.addEventListener('click', function(){
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/orders_web');
    request.addEventListener('load',function(){
        var resposta = request.responseText;
        var pedidos = JSON.parse(resposta);

        pedidos.forEach(pedido => {
            addOrderInTable(pedido);
            
        });
    })
    request.send();
 })