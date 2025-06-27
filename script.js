let grid= document.querySelector('.grid');
let gridSize = 16 
let totalCell = gridSize*gridSize


cellSize = grid.offsetWidth / gridSize;


for (let i= 0; i< gridSize; i++){
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid--row');

    grid.appendChild(gridRow);  

    for (let j = 0; j < gridSize; j++){
    const cell = document.createElement('div');
    cell.classList.add('grid--cell');

    //this tells the order of the current cell
    cell.dataset.row = i
    cell.dataset.column = j


    //add cell into large grid
    gridRow.appendChild(cell);
    }
}

const allCells= document.querySelectorAll('.grid--cell');

function getRandomColor(){
    return Math.floor(Math.random()* 255);
}
function highlightCell(){

    this.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
}

function clearCellHighlight(){
    Array.from(allCells).forEach(cell =>{
       cell.addEventListener('mouseover', () =>{
        this.style.backgroundColor = 'white';
       })
    }
    )
}


function clearAllHighlight()
{
    
        Array.from(allCells).forEach(cell => {
            cell.style.backgroundColor = 'initial'; 
        });
}

Array.from(allCells).forEach(cell => {
    cell.addEventListener('mouseover', highlightCell);
    // cell.addEventListener('mouseout', clearHighlight);
});


