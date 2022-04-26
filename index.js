import { calculaBhaskara, calculaDelta } from "./js/calculadora.js";

document.getElementById("calcular").addEventListener("click", calcular);
document
  .getElementById("exibirNovamente")
  .addEventListener("click", exibirNovamente);

// window.onload = function () {
//   document.getElementById("resultado").style.display = "none";
// };

function calcular() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let c = document.getElementById("c").value;

  let delta = calculaDelta(a, b, c);

  let bhaskara = calculaBhaskara(a, b, delta);

  exibirCalculo(bhaskara, a, b, c);
}

function exibirCalculo(bhaskara, a, b, c) {
  console.log(bhaskara);
  document.getElementById(
    "entrada"
  ).innerHTML = `Valores para a equação ${a}x ${b}x ${c} = 0`;
  document.getElementById("resultadoX1").innerHTML = `X' = ${bhaskara.x1}`;
  document.getElementById("resultadoX2").innerHTML = `X" = ${bhaskara.x2}`;

  document.getElementById("resultado").style.display = "block";
}
