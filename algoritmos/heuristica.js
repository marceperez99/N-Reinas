function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function inicializarTableroAleatoriamente(reinas){
    let n = reinas.length
    for (let i = 0; i < n; i++) {
        reinas[i] = getRandomInt(n)
    }
}
function getVariablesEnConflicto(reinas){
    let n = reinas.length
    let reinasEnConflicto = new Array(0)
    let columnasAgregadas = new Map()
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i != j) {
                if (reinas[i] == reinas[j] || i + reinas[i] == j + reinas[j] || (i - reinas[i]) == (j - reinas[j])) {
                    if (!columnasAgregadas.has(i)) {
                        reinasEnConflicto.push(i)
                        columnasAgregadas.set(i, true)
                    }
                }
            }
        }
    }
    return reinasEnConflicto
}

function getColumnaEnConflicto(reinasEnConflicto,ultimaColumna){
    let columnaEnConflicto = reinasEnConflicto[getRandomInt(reinasEnConflicto.length)]
    while (columnaEnConflicto == ultimaColumna)
        columnaEnConflicto = reinasEnConflicto[getRandomInt(reinasEnConflicto.length)]
    return columnaEnConflicto
}
function getConflictosEnColumna(reinas,columnaEnConflicto){
    //Encontrar numero de conflictos
    let n = reinas.length
    let conflictos = new Array(n)
    for(let i=0;i<n;i++){
        conflictos[i]=0
    }
    //La i representa la fila
    for (let i = 0; i < n; i++) {
        //Conflicto en fila
        for (let j = 0; j < n; j++) {
            if (columnaEnConflicto != j) {
                if (i == reinas[j]) {
                    conflictos[i]++
                }
            }
        }


        //Conflicto en diagonal derecha
        for (let j = 0; j < n; j++) {
            if (columnaEnConflicto != j) {
                if (columnaEnConflicto + i == reinas[j] + j) {
                    conflictos[i]++
                    
                }
            }
        }

        //Conflicto en diagonal izquierda
        for (let j = 0; j < n; j++) {
            if (columnaEnConflicto != j) {
                if (columnaEnConflicto - i == j - reinas[j]) {
                    conflictos[i]++
                }
            }
        }

    }
    return conflictos
}
function getNuevaPosicion(conflictos){
    
    //Encontrar minimo de conflictos
    let n = conflictos.length
    let minimo = Infinity
    for (let i = 0; i < n; i++) {
        if (minimo > conflictos[i]) {
            minimo = conflictos[i]
        }
    }

    let minimos = new Array()
    for (let i = 0; i < n; i++) {
        if (minimo == conflictos[i]) {
            minimos.push(i)
        }
    }
    
    return minimos[getRandomInt(minimos.length)]
    
}
const algoritmo_heuristico = (graficar_reina,n) => {
    n = parseInt(n)
    let reinas = new Array(n)
    let estados = new Map()

    inicializarTableroAleatoriamente(reinas)
    
    let paso = 0
    let ultimaColumna = -1
    while (true) {
        paso++
        estados.add(reinas.join(''))
        let reinasEnConflicto = getVariablesEnConflicto(reinas)
        if (reinasEnConflicto.length == 0) {
            return {reinas: reinas, pasos: paso, estados:estados}
        }
        let columnaEnConflicto = getColumnaEnConflicto(reinasEnConflicto,ultimaColumna)
        ultimaColumna = columnaEnConflicto
        let conflictos = getConflictosEnColumna(reinas,columnaEnConflicto)
        let nueva_posicion = getNuevaPosicion(conflictos)
        reinas[columnaEnConflicto] = nueva_posicion
    }
};