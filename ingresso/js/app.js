function comprar() {

    let opcaoSelecionada = document.getElementById ("tipo-ingresso").value;
    let quantidade = document.getElementById ("qtd").value;
    let valorADecrementar = parseInt (document.getElementById (`qtd-${opcaoSelecionada}`).textContent);

    if (quantidade < 0) {

        alert ("Por favor, coloque um número positivo!");
        document.getElementById ("qtd").value = "";
        return;
    }


    if (quantidade > valorADecrementar) {

        alert ("Não há assentos disponíveis para a quantidade inserida!");
        return;
    }

    let resultado = valorADecrementar - quantidade;
    
    alert ("Compra realizada com sucesso!!");
    
    let campoADecrementar = document.getElementById (`qtd-${opcaoSelecionada}`);

    campoADecrementar.textContent = resultado;
    document.getElementById ("qtd").value = "";
}