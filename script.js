console.log("----------Exercicio resolvido (Descomentar código)----------")

// let nomeCliente = prompt("Digite o nome do cliente");
// let qtdPaes = parseInt(prompt("Quantas unidades de pães ?"));

// let valorCompra = parseFloat(qtdPaes * 0.75);

// alert(`Valor da compra é: ${valorCompra.toFixed(2)}`);

// let data = Date.now();
// let hoje = new Date(data).toUTCString();

// alert(
// `${nomeCliente} - Valor da compra: ${valorCompra} - Produto: Pães - Quantidade: ${qtdPaes} - Data: ${hoje} `
// );





console.log("----------Exercicio 1 ----------")

let valorDaCompra  = parseFloat(prompt("Digite o valor da compra da gasolina"))
let valorLitro = 6.80
let litros = valorDaCompra/valorLitro

alert(`O cliente abasteceu ${litros.toFixed(2)}Lts`);





console.log("----------Exercicio 2 (Descomentar código)----------")

let grausCelsius = parseFloat(prompt("Digite a temperatura em graus Celsius"))
let grausF = (9*grausCelsius+160)/5

alert(`O valor ${grausCelsius}ºc em Fahrenheit é ${grausF.toFixed(2)}`)






console.log("----------Exercicio 3 (Descomentar código)----------")

let grausFahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit"))
let grausCelsiusConversion = ((grausFahrenheit-32)*5)/9

alert(`O valor ${grausFahrenheit}ºf em Celsius é ${grausCelsiusConversion}`)






console.log("----------Exercicio 4 (Descomentar código)----------")

let comprimento = parseFloat(prompt("Digite o comprimento da caixa"))
let largura = parseFloat(prompt("Digite a largura da caixa"))
let altura = parseFloat(prompt("Digite a altura da caixa"))

let volume = comprimento*largura*altura

alert(`O volume da caixa é de:${volume}m³`)






console.log("----------Exercicio 5 (Descomentar código)----------")

let numero = parseInt(prompt("Digite um numero para o calculo"))
let numeroQuadrado = numero*numero

alert(`O valor de ${numero} ao quadrado é de ${numeroQuadrado}`)







console.log("----------Exercicio 6 (Descomentar código)----------")

let nota1 = parseFloat(prompt("Digite o valor da nota 1"))
let nota2 = parseFloat(prompt("Digite o valor da nota 2"))
let nota3 = parseFloat(prompt("Digite o valor da nota 3"))
let nota4 = parseFloat(prompt("Digite o valor da nota 4"))
let nota5 = parseFloat(prompt("Digite o valor da nota 5"))

let somaNota = nota1+nota2+nota3+nota4+nota5
let mediaNotas = somaNota/5

alert(`A soma dos valores informados é:${somaNota}, e a média das notas é ${mediaNotas}.`)








console.log("----------Exercicio 7 (Descomentar código)----------")

let valor1 = parseInt(prompt("Digite o 1º valor"))
let valor2 = parseInt(prompt("Digite o 2º valor"))

let resultado = valor1%valor2

alert(`O resto da divisao do ${valor1} por ${valor2} é de ${resultado}`)








console.log("----------Exercicio 8 ----------")

let texto = prompt("Digite o texto que será calculado")
let tamanhoTexto = texto.length

alert(`Este texto tem ${tamanhoTexto} caracteres`)








console.log("----------Exercicio 9 ----------")


let textoAnalise = prompt("Digite o texto que será analisado")
let ultimaLetra = textoAnalise.substring(textoAnalise.length - 1)
let primeiraLetra = textoAnalise.substr(0,1)

alert(`A primeira letra deste texto é (${primeiraLetra.toUpperCase()}) e a ultima letra é (${ultimaLetra})`)









console.log("----------Exercicio 10 ----------")

let nomeFuncionario = prompt("Digite o nome da pessoa").toUpperCase()
let sobrenomeFuncionario = prompt("Digite o sobrenome do mesmo.").toUpperCase()
let idadeFuncionario = prompt("Digite a idade do funcionario")
let setorFuncionario = prompt("Digite o setor que o funcionário trabalha")

alert(`Nome: ${nomeFuncionario} ${sobrenomeFuncionario}, idade: ${idadeFuncionario}, Setor: ${setorFuncionario}`)