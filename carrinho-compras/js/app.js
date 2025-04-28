let valorTotal = 0;
limpar();

function adicionar() {

    let produto = document.getElementById ("produto").value;
    let nomeDoProduto = produto.split ("-") [0];
    let valorUnitario = produto.split ("R$") [1];
    let quantidade = document.getElementById ("quantidade").value;
    let preco = valorUnitario * quantidade;
    let listaDeProdutos = document.getElementById ("lista-produtos");

    if (quantidade <= 0) {

        alert ("Por favor, insira uma quantidade válida!");
        document.getElementById ("quantidade").value = "";
        return;
    }

    listaDeProdutos.innerHTML = listaDeProdutos.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">R$${valorUnitario}</span>
    </section>`;

    valorTotal = valorTotal + preco;

    document.getElementById ("valor-total").textContent = `R$ ${valorTotal}`;
    document.getElementById ("quantidade").value = "";
}

function limpar() {

    document.getElementById ("lista-produtos").innerHTML = "";
    document.getElementById ("valor-total").textContent = `R$${0}`;
    valorTotal = 0;
}


//split ("separador") [0]