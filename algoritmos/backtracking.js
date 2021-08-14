let pasos_backtracking = 0
let estados = new Set();
function verificar_conflictos(columnas) {
    var len = columnas.length, last = columnas[len - 1], prev = len - 2

    while (prev >= 0) {
        if (columnas[prev] === last) return true
        if (last - (len - 1) === columnas[prev] - prev) return true
        if (last + (len - 1) === columnas[prev] + prev) return true
        prev--
    }

    return false
}
  
function colocar_reina(total, reinas, columnas) {
    if (reinas === 0) return columnas
    columnas = columnas || []

    for (var columna = 0; columna < total; columna++) {
        columnas.push(columna)
        estados.add(columnas.join(''))
        pasos_backtracking++
        if (!verificar_conflictos(columnas) &&
            colocar_reina(total, reinas - 1, columnas)) {
        return columnas
        }
        columnas.pop(columna)
    }
    return undefined
}
const algoritmo_backtracking = (n) => {

    n = parseInt(n)
    reinas = colocar_reina(n, n)
    return {reinas:reinas, pasos: pasos_backtracking,estados:estados.size}
}
  