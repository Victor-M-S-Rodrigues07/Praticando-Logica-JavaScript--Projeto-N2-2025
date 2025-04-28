function sortear() {

    let quantidade = parseInt (document.getElementById ("quantidade").value);
    let numeroInicial = parseInt (document.getElementById ("de").value);
    let numeroFinal = parseInt (document.getElementById ("ate").value);

    if (numeroInicial > numeroFinal) {

        alert ("Atenção! O número inicial está maior que o número final. Por favor, altere os números.");
        return;
    }

    let range = numeroFinal - numeroInicial;

    if ( (range + 1) < quantidade) {

        alert (`Atenção! A "quantidade de números" está maior do que o intervalo de números existentes entre ${numeroInicial} e ${numeroFinal}. Por favor, altere os números.`)
        return;
    }

    let sorteados = [];
    let numeroAleatorio;

    for (let i = 0; i < quantidade; i++) {

        numeroAleatorio = obterNumeroAleatorio (numeroInicial, numeroFinal);

        while (sorteados.includes (numeroAleatorio)) {

            numeroAleatorio = obterNumeroAleatorio (numeroInicial, numeroFinal);
        }
        
        sorteados.push (numeroAleatorio);
    }

    let resultados = document.getElementById ("resultado");
    resultados.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio (min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao () {

    let botaoReiniciar = document.getElementById ("btn-reiniciar");

    if (botaoReiniciar.classList.contains ("container__botao-desabilitado") ) {

        botaoReiniciar.classList.remove ("container__botao-desabilitado");
        botaoReiniciar.classList.add ("container__botao");
    }

    else {

        botaoReiniciar.classList.remove ("container__botao");
        botaoReiniciar.classList.add ("container__botao-desabilitado");
    }
}

function reiniciar() {

    document.getElementById ("quantidade").value = "";
    document.getElementById ("de").value = "";
    document.getElementById ("ate").value = "";
    document.getElementById ("resultado").innerHTML = "<label class='texto__paragrafo'>Números sorteados:  nenhum até agora</label>";
    alterarStatusBotao();
}