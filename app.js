let peso = parseFloat(prompt('Qual o seu peso em Kg?'));
let altura = parseFloat(prompt('qual a sua altura em metros?'));
function imc(){
    return peso / altura ** 2;
}

alert(`o valor de seu IMC é ${imc()}`);

//---------------------------------------------------------------------

let number = parseInt(prompt('Digite um valor para calcularmos seu fatorial.'));
function fatorial(sla){
    let fat = 1;
    if (sla == 0 || sla == 1){
        return 1;
    } else {
        while (sla >= 2){
            fat = fat*sla;
            sla--;
        }
        return fat;
    }
}
alert(`o fatorial de ${number} é ${fatorial(number)}`);

//-----------------------------------------------------------------------


let money = parseFloat(prompt('Digite o valor em Dolar:'))
function convert(x){
    let cotDolar = 4.80;
    return  parseFloat(x * cotDolar);
}
alert(`A quantidade de dinheiro que você tem em reais é ${convert(money)} R$`);

//------------------------------------------------------------------------------
alert('Vamos calcular o perímetro de nossa sala!');
let raio = parseFloat(prompt('Qual o valor de seu raio em metros?'));
function perimentro(y){
    let pi = 3.14
    return 2 * pi * y
}
alert(`O perímetro desta sala é de ${perimentro(raio)}m.`);

//---------------------------------------------------------------------------------
alert("Vamos calcular os valores da tabuáda.")

let tab = parseInt(prompt("Você quer saber os valores de que tabuada?"));
function tabuada(z){
    let n = 0;
    tabela = "";
    while (n <= 10){
        tabela = tabela + `${n}X${z}=${n*z} \n`;
        n++;
    }
    alert(tabela);
}
tabuada(tab);

alert("hello, world!");

let numeroLimite = 1000
