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
    let timeout = false;

    reinas[0] = getRandomInt(n)
    let i = 0
    let k = 1
    while(k < n){
        let dominio = getDominio(reinas, k, n)
        
        if(dominio){
            reinas[k] = dominio[getRandomInt(dominio.length)]
            k++
        }else{
            k--
        }
        
        i++

        if(i > 1000) break
        if(timeout) break
    
    }

    if(k == n){
        for (let i = 0; i < k; i++) {
            graficar_reina(reinas[i], i, ACTIONS.COLOCAR)
        }
    }else{
        console.log("No se encontró una solución")
    }
};