// FUNZIONI
function createCell () {
  const cell = document.createElement('div');
  cell.className = 'cell';
  return cell;
}

// FASE DI PREPARAZIONE
// -Prendo la griglia
const grid = document.getElementById('grid');
// -Prendo il bottone Play
const button = document.querySelector('button');

// -Imposto delle condizioni iniziali  per poter controllare
// righe e colonne della griglia
const rows = 10;
const cols = 10;
const totCells = rows * cols;


// FASE DI ELABORAZIONE
// -Attacco un event listener sul bottone play
button.addEventListener('click', function () {
  // -Inserisco dinamicamente le celle con un ciclo for
  // e sfrutto la funzione create cell precedentemente creata;
  for (let i = 0; i < totCells; i++) {
    const cell = createCell();
  
    // inserisco la cella in pagina
    grid.appendChild(cell);
  }
})