// FUNZIONI
function createCell (content) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.append(content);
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
    const cell = createCell(i + 1);

    // -Attacco un event listener alla cella che faccia cambiare
    // il suo colore quando cliccata e che stampi in console il suo
    // numero
    cell.addEventListener('click', function () {
      cell.classList.toggle('clicked');
      console.log(cell.innerText);
    })
  
    // -Inserisco la cella in pagina
    grid.appendChild(cell);
  }
});