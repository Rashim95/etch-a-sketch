const container = document.getElementById('container');
const newSketch = document.getElementById('newsketch');
const erase = document.getElementById('erase');
const randomColorButton = document.getElementById('rgb');
let randomColorMode = false

newSketch.addEventListener('click', () => {
  let numOfSquares = prompt('Number of Rows and columns required on each side? (Max: 100)');
 if (numOfSquares === null) return; // For a null  or empty entry
  
 numOfSquares = parseInt(numOfSquares);

 // Keeping the input between 1 and 100
 if (isNaN(numOfSquares) || numOfSquares <=0 || numOfSquares > 100) {
  alert('Please enter a valid number between 1 and 100');}
else{createNewGrid(numOfSquares)};}
);

function createNewGrid(numOfSquares) {
  container.innerHTML = ''; // Clear existing grid

  // New grid setup
  container.style.gridTemplateColumns = `repeat(${numOfSquares}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${numOfSquares}, 1fr)`;
  
  // Create grid squares
  for (let i =0; i<numOfSquares * numOfSquares; i++){
    const squares = document.createElement('div');
    squares.classList.add('square');
    container.appendChild(squares);
    
  // Add event listener for RGB mode
  squares.addEventListener('mouseenter', () => {
    if(randomColorMode) {
    const randomColor = getRandomColor();
    squares.style.background = randomColor} else if (!randomColorMode) {
      // Set default color for pixel trail to black
      squares.style.background = 'black';
    }
  })
  
  
  // Erase the pixel trail when the button is pressed
  erase.addEventListener('click', () => {
      squares.style.background = "";
    });
  }

};

randomColorButton.addEventListener('click', () => {
  randomColorMode = !randomColorMode
});

 function getRandomColor(){
  const r = Math.round(Math.random()*256);
  const g = Math.round(Math.random()*256);
  const b = Math.round(Math.random()*256);
  return `rgb(${r}, ${g}, ${b})`;
 }


createNewGrid(16);