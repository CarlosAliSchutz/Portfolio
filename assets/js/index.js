import { PROJETOS } from '../constants/projetos.js';
import { HABILIDADES } from "../constants/skills.js";


// Habilidades
const skillsList = document.getElementById("habilidades");

HABILIDADES.forEach(({ name, porcentagem }) => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("h-item");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("h-title");
  const titleH3 = document.createElement("h3");
  titleH3.textContent = name;
  titleDiv.appendChild(titleH3);

  const porcentagemDiv = document.createElement("div");
  porcentagemDiv.classList.add("h-c-porcentagem");
  const porcentagemGeral = document.createElement("div");
  porcentagemGeral.classList.add('h-porcentagem-geral');

  const porcentagemConhecimento = document.createElement("div");
  porcentagemConhecimento.classList.add('h-porcentagem-conhecimento');
  porcentagemConhecimento.classList.add(`c-${porcentagem}`);

  const porcentagemSpan = document.createElement("span");
  porcentagemSpan.textContent = `${porcentagem}%`;


  porcentagemGeral.appendChild(porcentagemConhecimento);
  porcentagemGeral.appendChild(porcentagemSpan)
  porcentagemDiv.appendChild(porcentagemGeral);

  itemDiv.appendChild(titleDiv);
  itemDiv.appendChild(porcentagemDiv);

  skillsList.appendChild(itemDiv);
});


const projetoList = document.getElementById("projeto");

PROJETOS.forEach(({ imagem, titulo, github }) => {
  const link = document.createElement("a");
  link.setAttribute("target", "_blank");

  const photosDiv = document.createElement("div");
  photosDiv.classList.add("photos");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img");

  const imagemImg = document.createElement("img");
  imagemImg.src = imagem;
  imagemImg.alt = titulo;

  const tituloDiv = document.createElement("div");
  tituloDiv.classList.add("titulo");

  const tituloP = document.createElement("p");
  tituloP.textContent = titulo;

  tituloDiv.appendChild(tituloP);
  imgDiv.appendChild(imagemImg);
  imgDiv.appendChild(tituloDiv);
  photosDiv.appendChild(imgDiv);

  link.appendChild(photosDiv);
  link.href = github;

  projetoList.appendChild(link);
});
