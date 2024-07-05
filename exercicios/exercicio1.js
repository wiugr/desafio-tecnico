function multiplicaMatrizes(a, b) {
    if (a[0].length !== b.length) {
        console.log("O número de colunas da primeira matriz deve ser igual ao número de linhas da segunda matriz.");
    }

    let resultado = [];
    for (let i = 0; i < a.length; i++) {
        resultado[i] = [];
        for (let j = 0; j < b[0].length; j++) {
            resultado[i][j] = 0;
        }
    }

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b[0].length; j++) {
            for (let k = 0; k < b.length; k++) {
                resultado[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return resultado;
}

let a1 = [[[2],[-1]], [[2],[0]]];
let b1 = [[2, 3], [-2, 1]];
console.log("Resultado do Caso Teste 1:", multiplicaMatrizes(a1, b1));

let a2 = [[4, 0], [-1, -1]];
let b2 = [[-1, 3], [2, 7]];
console.log("Resultado do Caso Teste 2:", multiplicaMatrizes(a2, b2));
