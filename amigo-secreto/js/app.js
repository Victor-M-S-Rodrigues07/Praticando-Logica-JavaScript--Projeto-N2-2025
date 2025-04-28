let amigosIncluidos = []; 
let campoAmigosIncluidos = document.getElementById ("lista-amigos");
let amigosSorteados = [];
let campoSorteados = document.getElementById ("lista-sorteio");
let campoNomeDigitado = document.getElementById ("nome-amigo");

function adicionar() {

    let nomeDigitado = document.getElementById ("nome-amigo").value;

    if (nomeDigitado == "") {

        alert ("O campo está vazio. Adicione um nome para sortear.");
        return;
    }

    if (amigosIncluidos.includes (` ${nomeDigitado}`)) {

        alert ("Esse nome já foi adicionado. Caso seja outra pessoa, por favor, adicione o sobrenome para diferenciar.");
        return;
    }
    
    amigosIncluidos.push (` ${nomeDigitado}`);
    campoAmigosIncluidos.textContent = amigosIncluidos; 

    campoNomeDigitado.value = "";
}

function sortear() {

    amigosSorteados = [];
    campoSorteados.innerHTML = "";

    let numeroParticipantes = amigosIncluidos.length;

    if (numeroParticipantes <= 3) {

        alert ("Para uma melhor experiência com o sorteador, adicione no mínimo 4 participantes.");
        return;
    }

    for (let n = 0; n <= numeroParticipantes - 1; n++) {

        let numeroSorteado = obterNumeroAleatorio (0, numeroParticipantes - 1);

        if (amigosSorteados.includes (amigosIncluidos[numeroSorteado])) {

            return sortear();
        }

        if (amigosIncluidos[n] == amigosIncluidos[numeroSorteado]) {

            return sortear();
        }

        amigosSorteados[n] = amigosIncluidos[numeroSorteado];    
    }

    for (n = 0; n <= numeroParticipantes - 1; n++) {

        campoSorteados.innerHTML = campoSorteados.innerHTML + `${amigosIncluidos[n]} -> ${amigosSorteados[n]} <br>`;
    }
}

function reiniciar() {

    campoAmigosIncluidos.textContent = "";
    amigosIncluidos = [];
    amigosSorteados = [];
    campoSorteados.innerHTML = "";
    campoNomeDigitado.value = "";
}

function obterNumeroAleatorio (min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}