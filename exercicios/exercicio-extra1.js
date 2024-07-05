var cont = 0
for (i = 0; i < 6; i++) {
    valor = prompt("Insira o " + (i+1) + "° valor: ");
    if (valor > 0) {
        cont++
    }
}
console.log("A quantidade de valores positivos foi: " + cont)