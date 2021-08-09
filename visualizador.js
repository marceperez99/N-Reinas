<<<<<<< HEAD
const initState = {
    n: undefined,
    algorithm: undefined,
    queens: []
}

const generateTablero = (n) => {
    const tabla = document.createElement('table');
    tabla.className = 'col-6 border rounded mx-auto m-2 text-center'
    for (let i = 0; i < n; i++) {
=======
const generateTablero = (n) => {
    const tabla = document.createElement('table');
    tabla.className='border rounded mx-auto m-2 text-center'
    for(let i = 0;i < n; i++){
>>>>>>> main
        const row = document.createElement('tr');
        for (let j = 0; j < n; j++) {
            const cell = document.createElement('td');
            if ((i + j) % 2 === 0) {
                cell.setAttribute('style', 'background-color: grey');
            } else {
                cell.setAttribute('style', 'background-color: white');
            }
<<<<<<< HEAD
            cell.className = 'p-1';
=======
        
>>>>>>> main
            const queen = document.createElement('img');
            queen.setAttribute('style','height: 50px')
            queen.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/800px-Chess_qdt45.svg.png');
<<<<<<< HEAD
            queen.setAttribute('height', '50px');
            queen.id = `queen_${i}`

=======
            
            queen.setAttribute('style','display: none');
            queen.id = `queen_${i}_${j}`;
            cell.setAttribute('height','50px');
            cell.setAttribute('width','50px');
>>>>>>> main
            cell.appendChild(queen);
            row.appendChild(cell);
        }
        tabla.appendChild(row);
    }
    return tabla;
}

<<<<<<< HEAD
const graficar = (i, j, action) => {

};

=======
const graficar = (i,j,action) => {
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
const registarResultado = (time, algorithm, n) => {
    
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
    resutadosTable.appendChild(row);
}
const algoritmoElegido = document.getElementById('algoritmo_elegido');
algoritmoElegido.value = state.algorithm;
algoritmoElegido.addEventListener('change', updateState('algorithm'));
const size = document.getElementById('n_size');
size.value = state.n;
size.addEventListener('change', updateState('n'));
document.getElementById('iniciar_simulacion').addEventListener('click',() => {
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
    algorithm(state.n);
    const afterTime = new Date();

    const executionTime = afterTime.getTime() - beforeTime.getTime();
    registarResultado(executionTime, state.algorithm, state.n);
});

    
const tablero = document.getElementById("tablero");
tablero.innerHTML = ''
tablero.appendChild(generateTablero(state.n));
>>>>>>> main
