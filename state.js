const state = {
    n: 8,
    algorithm: undefined,
}
const ACTIONS = {
    COLOCAR: 1,
    SACAR: 2
}
const ALGORITMOS = {
    backtracking:"Backtracking",
    las_vegas:"Las Vegas",
    heuristica:"Heuristica"
}
const updateState = (field) =>(event) => { 
    state[field] = event.target.value; 
    console.log(state);
    return state;
};