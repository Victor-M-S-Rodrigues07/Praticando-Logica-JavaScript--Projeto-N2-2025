let numeroAlugueis = 1;

function alterarStatus(id) {

    let jogo = document.getElementById (`game-${id}`);
    let imagem = jogo.querySelector (".dashboard__item__img");
    let botao = jogo.querySelector (".dashboard__item__button");
    

    if (imagem.classList.contains ("dashboard__item__img--rented")) {

        let confirmacao = parseInt (prompt ("Deseja devolver esse jogo? 1 - Sim; 2 - Não"));
        
        if (confirmacao == 1) {

            imagem.classList.remove ("dashboard__item__img--rented");
            botao.classList.remove ("dashboard__item__button--return");
            botao.textContent = "Alugar";
            numeroAlugueis--;
        }

        else {

            return;
        }
    }   

    else {
        numeroAlugueis++;
        console.log (`O número de jogos alugados é ${numeroAlugueis}`);
        imagem.classList.add ("dashboard__item__img--rented");
        botao.classList.add ("dashboard__item__button--return");
        botao.textContent = "Devolver";
    }
}