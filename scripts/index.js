import { criarItemSerie } from "./criarItemSerie.js";
import { verificarLista, atualizarContador } from "./util.js";

const botaoAdicionar = document.getElementById("botao-adicionar");
const listaSeries = document.getElementById("lista-series");
const contadorPendentes = document.getElementById("contador-pendentes");

botaoAdicionar.addEventListener("click", (eventoAdicionar) =>  {
    eventoAdicionar.preventDefault();
    const novoItem = criarItemSerie(listaSeries, contadorPendentes);
    listaSeries.appendChild(novoItem);
    verificarLista(listaSeries);
    atualizarContador(listaSeries, contadorPendentes);
})









