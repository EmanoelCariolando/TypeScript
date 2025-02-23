var numberOne = document.getElementById('one');
var numberTwo = document.getElementById('two');
var button = document.getElementById('add');
var result = document.getElementById('result');
function calc(n1, n2) {
    return n1 + n2;
}
// Verifica se todos os elementos existem antes de adicionar o evento
if (button && numberOne && numberTwo && result) {
    button.addEventListener('click', function () {
        var n1 = Number(numberOne.value); // "!" garante que não é null
        var n2 = Number(numberTwo.value);
        result.innerHTML = calc(n1, n2).toString();
    });
}
else {
    console.error("Erro: Um dos elementos não foi encontrado no DOM.");
}
