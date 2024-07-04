var nota1 = prompt("Insira a primeira nota do aluno: ")
var nota2 = prompt("Insira a segunda nota do aluno: ")
var nota3 = prompt("Insira a terceira nota do aluno: ")
if ((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3))/3 >= 6){
    console.log("Aprovado")
}
else{
    console.log("Reprovado")
}
