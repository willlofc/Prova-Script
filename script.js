
//Script exercício 01
let clique = document.getElementById('clique');
let resultado = document.getElementById('resultado');

function Mostrar() {
    resultado.innerHTML = 'olá, ' + clique.value + ", tudo bem?";
}


//Script exercício 02
let metros = document.getElementById('metros');
let resultado2 = document.getElementById('resultado2');

function converterCentimetros() {
    let metrosA = parseFloat(metros.value);
    let centimetros = metrosA * 100;
    resultado2.innerHTML = metrosA + ' metros são ' + centimetros + ' centímetros.';
}


//Script exercício 03
let numero = document.getElementById("numero");
let resultado3 = document.getElementById("resultado3");

function Analisar(){
    resultado3.innerHTML = `Antecessor   = ${parseFloat(numero.value) -1} --- Sucessor = ${parseFloat(numero.value) +1}`;
}


//Script exercício 04
let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');
let resultado4 = document.getElementById('resultado4');

function compareNumeros() {
    let num1 = parseFloat(numero1.value);
    let num2 = parseFloat(numero2.value);

        if (num1 > num2) {
                resultado4.innerHTML = 'O maior número é: ' + num1 + '. O menor número é: ' + num2 + '.';
        } else if (num1 < num2) {
                resultado4.innerHTML = 'O maior número é: ' + num2 + '. O menor número é: ' + num1 + '.';
        } else {
                resultado4.innerHTML = 'Os números são iguais: ' + num1 + '.';
        }
}


//Script exercício 06
let resultado6 = document.getElementById('resultado6');

function Começar() {
    resultado6.innerHTML = ''; // Limpa o conteúdo anterior
        let number = 0;
        while (number <= 100) {
        resultado6.innerHTML += number + '-';
        number++;
    }
}


//Script exercício 07
let resultado7 = document.getElementById('resultado7');

function Começar2() {
    resultado7.innerHTML = ''; // Limpa o conteúdo anterior
        let num = 0;
        while (num <= 50) {
        resultado7.innerHTML += num + '-';
        num += 5;
    }
}


//Script exercício 08
let resultado8 = document.getElementById('resultado8');

function Começar3() {
    resultado8.innerHTML = ''; // Limpa o conteúdo anterior
        let num1 = 100;
        while (num1 >= 0) {
        resultado8.innerHTML += num1 + '-';
        num1 -= 10;
    }
}


//Script exercício 05
let salario;
let aumento;

function calcularAumento() {
    salario = parseFloat(document.getElementById('salario').value);
        if (salario <= 1250) {
            aumento = salario * 0.15;
        } else {
            aumento = salario * 0.10;
        }
            document.getElementById('resultado5').innerHTML = 'O valor do aumento é: R$ ' + aumento.toFixed(2);
}