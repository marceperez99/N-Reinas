const initState = {
    n: undefined,
    algorithm: undefined,
    queens: []
}

const generateTablero = (n)=>{
    const tabla = document.createElement('table');
    tabla.className='col-6 border rounded mx-auto m-2 text-center'
    for(let i = 0;i < n; i++){
        const row = document.createElement('tr');
        for(let j = 0; j < n; j++){
            const cell = document.createElement('td');
            if((i+j)%2 === 0 ){
                cell.setAttribute('style','background-color: grey');
            }else{
                cell.setAttribute('style','background-color: white');
            }
            cell.className='p-1';
            const queen = document.createElement('img');
            queen.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/800px-Chess_qdt45.svg.png');
            queen.setAttribute('height','50px');
            queen.id=`queen_${}`
            
            cell.appendChild(queen);
            row.appendChild(cell);
        }
        tabla.appendChild(row);
    }
    return tabla;
}

const graficar = (i,j,action) => {
    
};
    
