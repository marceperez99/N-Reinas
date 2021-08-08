function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const algoritmo_heuristico = (n) => {
    //Inicio del algoritmo
    let reinas = new Array(n)
    //Inicializa todas las variables aleatoriamente
    for (let i = 0; i < n; i++) {
        reinas[i] = getRandomInt(n)

    }
    //Proceso de reparación heurística
    while (true) {

        //Consigue una variable aleatoria que no satisfaga la condición del PSR
        let reinas_en_conflicto = new Array()
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i != j) {
                    if (reinas[i] == reinas[j] || i + reinas[i] == j + reinas[j] || Math.abs(i - reinas[i] == Math.abs(j - reinas[j]))) {
                        reinas_en_conflicto.push(i)
                    }
                }
            }
        }
        if (reinas_en_conflicto.length == 0) {
            console.log("Encontre la solución")

        }
        columna_en_conflicto = reinas_en_conflicto[getRandomInt(reinas_en_conflicto.length)]
        //Encontrar numero de conflictos
        let conflictos = new Array(n).fill(0)
        for (let i = 0; i < n; i++) {
            //Conflicto en fila
            for (let j = 0; j < n; j++) {
                if (i != j) {
                    if (reinas[columna_en_conflicto] == reinas[j]) {
                        conflictos[i]++
                        break;
                    }
                }
            }


            //Conflicto en diagonal derecha
            for (let j = 0; j < n; j++) {
                if (i != j) {
                    if (columna_en_conflicto + reinas[columna_en_conflicto] == reinas[j] + j) {
                        conflictos[i]++
                        break;
                    }
                }
            }

            //Conflicto en diagonal izquierda
            for (let j = 0; j < n; j++) {
                if (i != j) {
                    if (Math.abs(columna_en_conflicto - reinas[columna_en_conflicto]) == Math.abs(reinas[j] - j)) {
                        conflictos[i]++
                        break;
                    }
                }
            }

        }
        //Encontrar minimo de conflictos
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
        let nueva_posicion = minimos[getRandomInt(minimos.length)]
        reinas[columna_en_conflicto] = nueva_posicion
    }


    //Fin del algoritmo


};