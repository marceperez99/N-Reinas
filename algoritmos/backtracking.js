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

var print_board = function (columns) {
    var n = columns.length, row = 0, col = 0
    while (row < n) {
      while (col < n) {
        process.stdout.write(columns[row] === col ? 'Q ' : '# ')
        col++
      }
  
      process.stdout.write('\n')
      col = 0
      row++
    }
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

let soluciones = []

function colocar_reina2(total, reinas, columnas) {

    if (reinas === 0){
        soluciones.push([...columnas]);
        return columnas
    }
    columnas = columnas || []
    for (var columna = 0; columna < total; columna++) {
        columnas.push(columna)
        estados.add(columnas.join(''))
        pasos_backtracking++
        if (!verificar_conflictos(columnas) &&
            colocar_reina2(total, reinas - 1, columnas)) {
        }
        columnas.pop(columna)
    }
}

const algoritmo_backtracking = (n) => {

    n = parseInt(n)
    estados = new Set();
    reinas = colocar_reina(n, n)
    return reinas ? {
        reinas: reinas, 
        pasos: pasos_backtracking,
        estados:estados.size
    } : undefined;
}
const algoritmo_backtracking_all_solutions = (n) => {

    n = parseInt(n);
    soluciones = [];
    estados = new Set();
    reinas = colocar_reina2(n, n);
    return soluciones ? {
        reinas: soluciones, 
        pasos: pasos_backtracking,
        estados:estados.size
    } : undefined;
}

