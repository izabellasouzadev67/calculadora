const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const resultado = document.querySelector("#resultado");

const somar = document.querySelector("#somar");
const subtrair = document.querySelector("#subtrair");
const multiplicar = document.querySelector("#multiplicar");
const dividir = document.querySelector("#dividir");

// Função auxiliar para exibir o resultado
function mostrar(valor) {
  resultado.textContent = `Resultado: ${valor}`;
}

somar.addEventListener("click", () => {
  let conta = Number(n1.value) + Number(n2.value);
  mostrar(conta);
});

subtrair.addEventListener("click", () => {
  let conta = Number(n1.value) - Number(n2.value);
  mostrar(conta);
});

multiplicar.addEventListener("click", () => {
  let conta = Number(n1.value) * Number(n2.value);
  mostrar(conta);
});

dividir.addEventListener("click", () => {
  if (Number(n2.value) === 0) {
    resultado.textContent = "Não dá para dividir por zero";
  } else {
    let conta = Number(n1.value) / Number(n2.value);
    mostrar(conta);
  }
});