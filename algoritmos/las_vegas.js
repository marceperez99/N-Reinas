function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function esValido(val, reinas, k){
    let result = true

    for(let i = 0; i < k; i++){
        // Analizar las filas
        if(val == reinas[i]){
            result = false
            break
        } 
        // Analizar la columna diagonal derecha
        if(val + k == reinas[i] + i){
            result = false
            break
        }
        // Analizar la columna diagonal izquierda
        if(val - k == reinas[i] - i){
            result = false
            break
        }
    }

    return result
}

function getDominio(reinas, k, n){
    let dominio = new Array(0)

    for(let i = 0; i < n; i++){
        if(esValido(i, reinas, k)){
            dominio.push(i)
        }
    }

    return dominio
}

const algoritmo_las_vegas = (graficar_reina,n) => {
    n = parseInt(n)
    let reinas = new Array(n)
    let timeout = false
    let estados = new Set()

    let i = 0
    let k = 0
    while(k < n){

        if(k == 0){
            reinas[0] = getRandomInt(n)
            k++
        }else{
            let dominio = getDominio(reinas, k, n)
            
            if(dominio.length != 0){
                reinas[k] = dominio[getRandomInt(dominio.length)]
                k++
            }else{
                k = 0
            }
        }

        estados.add(reinas.slice(0,k).join(''))

        i++

        if(i > 100000) break
        if(timeout) break
    
    }

    let cantidad_estados = estados.size
    console.log(cantidad_estados)
    console.log(i)

    if(k == n){
        for (let i = 0; i < k; i++) {
            graficar_reina(reinas[i], i, ACTIONS.COLOCAR)
        }
    }else{
        console.log("No se encontró una solución")
    }
};