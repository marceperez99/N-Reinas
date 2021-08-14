const generateTablero = (n) => {
    const tabla = document.createElement('table');
    tabla.className='border rounded mx-auto m-2 text-center'
    for(let i = 0;i < n; i++){
        const row = document.createElement('tr');
        for (let j = 0; j < n; j++) {
            const cell = document.createElement('td');
            if ((i + j) % 2 === 0) {
                cell.setAttribute('style', 'background-color: grey');
            } else {
                cell.setAttribute('style', 'background-color: white');
            }
        
            const queen = document.createElement('img');
            queen.setAttribute('style','height: 50px')
            queen.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/800px-Chess_qdt45.svg.png');
            
            queen.setAttribute('style','display: none');
            queen.id = `queen_${i}_${j}`;
            cell.setAttribute('height','50px');
            cell.setAttribute('width','50px');
            cell.appendChild(queen);
            row.appendChild(cell);
        }
        tabla.appendChild(row);
    }
    return tabla;
}

const graficarReina = (i,j,action) => {
    const queen = document.getElementById(`queen_${i}_${j}`);
    switch(action){
        case ACTIONS.COLOCAR:
            queen.setAttribute('style','display: inline; height: 50px');
        break;
        case ACTIONS.SACAR:
            queen.setAttribute('style','display: none; height: 50px');
        break;
    }
};
const registarResultado = (n, algorithm, time, nodos) => {
    
    const resutadosTable = document.getElementById('resultadosTable');
    const row = document.createElement('tr');
    let cell = document.createElement('td');
    cell.innerText = n;
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.innerText = ALGORITMOS[algorithm];
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.innerText = time;
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.innerText = nodos;
    row.appendChild(cell);
    resutadosTable.appendChild(row);
}

const algoritmoElegido = document.getElementById('algoritmo_elegido');
algoritmoElegido.value = state.algorithm;
algoritmoElegido.addEventListener('change', (e) => {
    const newState = updateState('algorithm')(e);
    const timeoutInput = document.getElementById('timeout_input');
    if (newState.algorithm === "las_vegas"){
        timeoutInput.setAttribute('style','display: block');
    } else {
        timeoutInput.setAttribute('style','display: none');
    }
});

const size = document.getElementById('n_size');
size.value = state.n;
size.addEventListener('change', updateState('n'));

const timeout = document.getElementById('timeout');
timeout.value = state.timeout;
timeout.addEventListener('change', updateState('timeout'));


const graficarSolucion = document.getElementById('graficarFlag');
graficarSolucion.checked = state.graficarSolucion;
graficarSolucion.addEventListener('change', (e) => { 
    state.graficarSolucion = e.target.checked;
    const tablero = document.getElementById('tableroSolucion');
    if(state.graficarSolucion){
        tablero.setAttribute('style','display: block');
    }else{
        tablero.setAttribute('style','display: none');
    }
});

document.getElementById('iniciar_simulacion').addEventListener('click', () => {
    const tablero = document.getElementById("tablero");
    tablero.innerHTML = ''
    tablero.appendChild(generateTablero(state.n));
    let algorithm;
    switch(state.algorithm){
        case 'backtracking':
            algorithm = algoritmo_backtracking;
        break;
        case 'las_vegas':
            algorithm = algoritmo_las_vegas;
        break;
        case 'heuristica':
            algorithm = algoritmo_heuristico;
        break;
    }

    const beforeTime = new Date();
    const result = algorithm(state.n);
    const afterTime = new Date();
    console.log(result);
    if(result){
        if(state.graficarSolucion)
            result.reinas.forEach((reina, i) => {graficarReina(i, reina,ACTIONS.COLOCAR)});

        const executionTime = afterTime.getTime() - beforeTime.getTime();
        registarResultado(state.n, state.algorithm, executionTime, result.estados);
    }else{
        registarResultado(state.n, state.algorithm, 'No hay solución', '-');
    }

    
});

    
const tablero = document.getElementById("tablero");
tablero.innerHTML = ''
tablero.appendChild(generateTablero(state.n));
