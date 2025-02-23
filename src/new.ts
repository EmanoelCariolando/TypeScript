let numberOne = document.getElementById('one') as HTMLInputElement | null;
let numberTwo = document.getElementById('two') as HTMLInputElement | null;
let button = document.getElementById('add');
let result = document.getElementById('result');

function calc(n1: number, n2: number) {
  return n1 + n2;
}

// Verifica se todos os elementos existem antes de adicionar o evento
if (button && numberOne && numberTwo && result) {
  button.addEventListener('click', () => {
    let n1 = Number(numberOne!.value); // "!" garante que não é null
    let n2 = Number(numberTwo!.value);

    result!.innerHTML = calc(n1, n2).toString();
  });
} else {
  console.error("Erro: Um dos elementos não foi encontrado no DOM.");
}