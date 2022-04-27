import { calculaBhaskara, calculaDelta } from "./js/calculadora.js";

document.getElementById("calcular").addEventListener("click", calcular);

function calcular() {
  limpaDados();
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let c = document.getElementById("c").value;

  let delta = calculaDelta(a, b, c);

  console.log(delta);
  if (delta < 0) {
    exibirSemRaiz(a, b, c);
  } else {
    let bhaskara = calculaBhaskara(a, b, delta);
    exibirCalculo(bhaskara, a, b, c);
  }
}

function exibirCalculo(bhaskara, a, b, c) {
  document.getElementById(
    "entrada"
  ).innerHTML = `Valores para a equação ${a}x<sup>2</sup> ${b}x ${c} = 0`;

  if (bhaskara.x2) {
    document.getElementById("resultadoX1").innerHTML = `X' = ${bhaskara.x1}`;
    document.getElementById("resultadoX2").innerHTML = `X" = ${bhaskara.x2}`;
  } else {
    document.getElementById(
      "resultadoX1"
    ).innerHTML = `X' = X" = ${bhaskara.x1}`;
  }

  document.getElementById("resultado").style.display = "block";
  document.getElementById("resultadoRaiz").style.display = "block";
}

function exibirSemRaiz(a, b, c) {
  document.getElementById("resultado").style.display = "block";
  document.getElementById("resultadoSemRaiz").style.display = "block";

  document.getElementById(
    "mensagemSemRaiz"
  ).innerHTML = `A equação ${a}x<sup>2</sup> ${b}x ${c} = 0 não possui raiz real.`;
}

function limpaDados() {
  document.getElementById("resultado").style.display = "none";
  document.getElementById("resultadoRaiz").style.display = "none";
  document.getElementById("resultadoSemRaiz").style.display = "none";
}
