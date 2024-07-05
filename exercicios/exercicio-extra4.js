var nota = prompt("Insira a nota: ")
if (nota > 89) {
    nota = "A"
}
else if (nota > 79) {
    nota = "B"
}
else if (nota > 69) {
    nota = "C"
}
else if (nota > 59) {
    nota = "D"
}
else if (nota < 60) {
    nota = "F"
}
console.log(nota)