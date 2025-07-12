

export function gerarData () {
    const data = new Date().toLocaleDateString("pt-BR");
    const hora = new Date().toLocaleTimeString("pt-BR",{hour: "numeric",
    minute: "numeric"
    });
    const dataCompleta = `Adicionado em: ${data} às ${hora}`
    return dataCompleta
}

export function verificarLista (listaSeries) {
    const itensDaLista = listaSeries.querySelectorAll("li");
    const mensagemListaVazia = document.querySelector(".lista-vazia")
    
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block"
    } else { 
        mensagemListaVazia.style.display = "none"
    }
}

export function atualizarContador (listaSeries, contadorElemento) {
    const itens = listaSeries.querySelectorAll("li");
    let pendentes = 0;

    itens.forEach((item) => {
        if (!item.classList.contains("assistido")) {
            pendentes ++;
        }
    });

    contadorElemento.innerText = `Séries pendentes: ${pendentes}`;
    }






