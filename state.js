const state = {
    n: 8,
    algorithm: undefined,
    timeout: 5 * 1000, // 5 segundos * 1000 milisegundos
    graficarSolucion: true
}
const ACTIONS = {
    COLOCAR: 1,
    SACAR: 2
}
const ALGORITMOS = {
    backtracking: "Backtracking",
    backtracking_all_solutions: "Backtracking (Todas las soluciones)",
    las_vegas: "Las Vegas",
    heuristica: "Heuristica"
}
const updateState = (field) =>(event) => { 
    state[field] = event.target.value; 
    console.log(state);
    return state;
};