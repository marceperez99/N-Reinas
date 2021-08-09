function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function mostrar(reinas) {
    console.log(reinas)
}

const algoritmo_heuristico = (n) => {
    //Inicio del algoritmo
    let reinas = [2, 2, 1, 0]
    //Inicializa todas las variables aleatoriamente
    /*for (let i = 0; i < n; i++) {
        reinas[i] = getRandomInt(n)

    }*/
    //Proceso de reparación heurística
    let paso = 0
    let ultima_columna = -1
    while (false) {
        paso++

        //Consigue una variable aleatoria que no satisfaga la condición del PSR
        let reinas_en_conflicto = new Array(0)
        let columnas_agregadas = new Map()
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i != j) {
                    if (reinas[i] == reinas[j] || i + reinas[i] == j + reinas[j] || Math.abs(i - reinas[i]) == Math.abs(j - reinas[j])) {
                        if (!columnas_agregadas.has(i)) {
                            reinas_en_conflicto.push(i)
                            columnas_agregadas.set(i, true)
                        }
                    }
                }
            }
        }
        console.log("Paso: " + paso)
        console.log("Estas son las columnas en conflicto")
        console.log(reinas_en_conflicto)


        if (reinas_en_conflicto.length == 0) {
            console.log("Encontre la solución")
            mostrar(reinas)
            break;
        }
        mostrar(reinas)
        columna_en_conflicto = reinas_en_conflicto[getRandomInt(reinas_en_conflicto.length)]
        while (columna_en_conflicto == ultima_columna)
            columna_en_conflicto = reinas_en_conflicto[getRandomInt(reinas_en_conflicto.length)]
        ultima_columna = columna_en_conflicto
        console.log("Esta es la columna conflictiva: " + columna_en_conflicto)

        //Encontrar numero de conflictos
        let conflictos = new Array(n).fill(0)
        //La i representa la fila
        for (let i = 0; i < n; i++) {
            //Conflicto en fila
            for (let j = 0; j < n; j++) {
                if (columna_en_conflicto != j) {
                    if (i == reinas[j]) {
                        conflictos[i]++
                        break;
                    }
                }
            }


            //Conflicto en diagonal derecha
            for (let j = 0; j < n; j++) {
                if (columna_en_conflicto != j) {
                    if (columna_en_conflicto + i == reinas[j] + j) {
                        conflictos[i]++
                        break;
                    }
                }
            }

            //Conflicto en diagonal izquierda
            for (let j = 0; j < n; j++) {
                if (columna_en_conflicto != j) {
                    if (columna_en_conflicto - i == j - reinas[j]) {
                        conflictos[i]++
                        break;
                    }
                }
            }

        }
        console.log("Estos son los conflictos")
        console.log(conflictos)
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
        console.log("Esta es la nueva posicion: " + nueva_posicion)

        reinas[columna_en_conflicto] = nueva_posicion


    }
    //Fin del algoritmo


};