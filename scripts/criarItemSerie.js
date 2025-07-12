const inputSerie = document.getElementById("input-serie");

let contador = 0;
import { gerarData } from "./util.js";
import { verificarLista, atualizarContador } from "./util.js";

export function criarItemSerie (listaSeries, contadorPendentes) {
    if (inputSerie.value === "") {
        alert ("Digite um item na lista")
        return
    }
    const itemSerie = document.createElement("li");
    itemSerie.classList.add("item-serie");

    const containerLista = document.createElement("div");
    containerLista.classList.add("container-series");

    const nomeSerie = document.createElement("p");
    nomeSerie.classList.add("nome-serie");
    nomeSerie.innerText = inputSerie.value;

    const dataHora = document.createElement("span");
    dataHora.innerText = gerarData();
    dataHora.classList.add("data-hora");

    const assistido = document.createElement("p")
    assistido.innerText = "Assistido"

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox-" + contador++;

    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-remover");
    botaoRemover.innerText = "Remover Item";

    botaoRemover.addEventListener("click", () => {
    itemSerie.remove();
    verificarLista(listaSeries);
    atualizarContador(listaSeries, contadorPendentes);});
    
    checkbox.addEventListener("click", () =>  {
    if (checkbox.checked) {
        itemSerie.classList.add("assistido")
    } else {
        itemSerie.classList.remove("assistido");
    }
    atualizarContador(listaSeries, contadorPendentes);});

    containerLista.appendChild(nomeSerie);
    containerLista.appendChild(dataHora);
    containerLista.appendChild(checkbox);
    containerLista.appendChild(assistido);
    containerLista.appendChild(botaoRemover);
    
    
    itemSerie.appendChild(containerLista);
    
    return itemSerie;
}





 
