const botao = document.getElementById("botao");
const somar = document.getElementById("somar");
const resultado = document.getElementById("resultado");
const menos = document.getElementById("menos");
const mais = document.getElementById("mais");
const restart = document.getElementById("restart");
const valor = document.getElementById("valor");
const input = document.querySelector("#TEXTO");
const saida = document.querySelector("#saida");
const input1 = document.getElementById("soma1");
const input2 = document.getElementById("soma2");
const aviso = document.getElementById("aviso");
const toggleTema = document.getElementById("toggleTema");

input.addEventListener("input", function () {
  saida.innerText = input.value;
});

botao.addEventListener("click", function () {
  botao.innerText = "Clicado!";
});

somar.addEventListener("click", function () {
  // Pega os valores dos inputs e converte para número
  const valor1 = Number(input1.value);
  const valor2 = Number(input2.value);
  // Soma
  const soma = valor1 + valor2;

  // Mostra no resultado
  resultado.innerText = "Resultado:" + soma;
});

let contador = 0;
function atualizaTela() {
  valor.innerText = contador;
}
menos.addEventListener("click", function () {
  if (contador > 0) {
    contador--;
    atualizaTela();
    if (contador === 0){
      aviso.innerText= ("🥶 Você não pode descer mais! 🥶")
    }
  }
});
mais.addEventListener("click", function () {
  if (contador < 10) {
    contador++;
    atualizaTela();
    if (contador === 10) {
      aviso.innerText = ("⚡ Você chegou ao limite máximo (10)! ⚡");
    }
  }
});

restart.addEventListener("click", function () {
  contador = 0;
  atualizaTela();
  aviso.innerText = "";
});

toggleTema.addEventListener("click", function() {
  document.body.classList.toggle("light");
});


