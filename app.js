// Variables for shuffling the Sasquatch image in the 5x5 grid
const startGridButton = document.getElementById('startBtn');
const stopGridButton = document.getElementById('stopBtn');
let shuffleInterval = null;
let sasquatchImg = './img/bigfoot.png';  // Path to your Sasquatch image

// Create 25 grid cells for the 5x5 board if not already created
for (let i = 0; i < 25; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  board.appendChild(cell);
}

// Function to shuffle the Sasquatch randomly across the cells
function shuffleSasquatch() {
  // Remove any existing Sasquatch from the grid
  document.querySelectorAll('.cell img').forEach(img => img.remove());

  // Get a random cell
  const cells = document.querySelectorAll('.cell');
  const randomIndex = Math.floor(Math.random() * cells.length);
  const randomCell = cells[randomIndex];

  // Create an image element for Sasquatch and insert it into the random cell
  const img = document.createElement('img');
  img.src = sasquatchImg;
  img.classList.add('sasquatch');
  randomCell.appendChild(img);
}

// Start shuffling the Sasquatch every 0.3 seconds
startGridButton.addEventListener('click', () => {
  if (!shuffleInterval) {
    shuffleInterval = setInterval(shuffleSasquatch, 300);
  }
});

// Stop the shuffling when the STOP button is clicked
stopGridButton.addEventListener('click', () => {
  clearInterval(shuffleInterval);
  shuffleInterval = null;
});
