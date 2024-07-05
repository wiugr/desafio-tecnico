function potencia(base, expoente) {
    if (expoente === 0) {
        return 1;
    }
    if (expoente === 1) {
        return base;
    }
    return base * potencia(base, expoente - 1);
}
// Exemplos
console.log(potencia(4, 0));
console.log(potencia(5, 3));
console.log(potencia(9, 1));
console.log(potencia(3, 5));
