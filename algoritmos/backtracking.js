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
        pasos++
        if (!verificar_conflictos(columnas) &&
            colocar_reina(total, reinas - 1, columnas)) {
        return columnas
        }
        columnas.pop(columna)
    }

    return null
}
  
const algoritmo_backtracking = (graficar_reina, n) => {

    n = parseInt(n)
    pasos = 0
    reinas = colocar_reina(n, n)
    for (let i = 0; i < k; i++) {
        graficar_reina(reinas[i], i, ACTIONS.COLOCAR)
    }
}
  