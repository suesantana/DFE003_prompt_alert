//- Elabore um programa que leia um numero e devolva para o usuário o dobro do número informado.
const numero = prompt ("Digite um número");
const dobro = numero * 2;
const triplo = numero * 3;
const frasePar = `O número ${numero} é par. ${numero} x 2 é: ${dobro}.`;
const fraseImpar = `O número ${numero} é ímpar. ${numero} x 3 é: ${triplo}.`;
if (numero % 2 === 0){
    alert (frasePar);
} 
if (numero % 2 !== 0){
    alert (fraseImpar);
}

// //- Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto pela conta junto com a taxa de atendimento do garçom.
//   Entrada de dados: ler o valor da conta.
//   Processamento: calcular junto com o valor do custo do garçom.
//   Saída: informar o resultado.
// Adicionar uma pergunta para saber qual dia da semana que é hoje. Se for sábado ou domingo a taxa do garçom será 20%, senão (ou seja, os outros dias da semana) será 10%.
// Sendo sábado ou domingo, retorne uma frase para aparecer na tela:
// “Hoje é sábado. A taxa do garçom é 20%. O valor total ficou em ….”.
// Se for outro dia da semana:
// “Hoje é terça. A taxa do garçom é 10%. O valor total ficou em ….”.
const valorDaConta = Number(window.prompt("Qual o valor da conta?"));
const diaDaSemana = prompt("Que dia da semana é hoje?");
const valorDiasUteis = valorDaConta * 0.1;
const valorFimDeSemana = valorDaConta * 0.2;
const totalDiasUteis = valorDaConta + valorDiasUteis;
const totalFds = valorDaConta + valorFimDeSemana;
const diasFds = ["sábado", "domingo"];
const diasUteis = ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA"];
const fraseDiasUteis = `Hoje é ${diaDaSemana}. A taxa do garçom é 10%. O valor total ficou em ${totalDiasUteis}.`;
const fraseFds = `Hoje é ${diaDaSemana}. A taxa do garçom é 20%. O valor total ficou em ${totalFds}.`;
const fraseErro = `Digite um dia da semana válido.`;

if (diasFds.includes(diaDaSemana.toLowerCase())) {
    alert(fraseFds);
} else if (diasUteis.includes(diaDaSemana.toUpperCase())) {
    alert(fraseDiasUteis);
} else {
    alert(fraseErro);
}


//const valorComTaxa = valorDaConta * 0.1;
//const valorTotal = valorDaConta + valorComTaxa;
//alert ("O valor a ser pago é de: R$" + valorTotal);

//- Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente. 
const totalDaConta = prompt ("Qual o total da conta?");
const quantidadeDePessoas = prompt ("Quantas pessoas consumiram?");
let valorPorPessoa = totalDaConta/quantidadeDePessoas;
const fraseDivisao = `O total por pessoa é de R$ ${valorPorPessoa}`
alert (fraseDivisao);
