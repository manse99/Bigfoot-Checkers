

let SSrandomArray = [];

// Shuffle function using Fisher-Yates algorithm
function shuffle(array) {
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

// Initialize the game board
function init() {
  const container = document.querySelector(".container");
  
  for (let i = 0; i < 9; i++) {
    let div = document.createElement("div");
    if (i === 0) {
      div.id = "alive";
    } else if (i === 8) {
      div.id = "dead";
    } else {
      div.id = "Bg" + i;
    }

    div.dataset.index = i;
    div.classList.add("cell");
    SSrandomArray.push(div);

    container.appendChild(div);
  }

  let ss = document.createElement("img");
  ss.id = "sas";
  ss.src = "./img/sasrun.jpeg";
  document.querySelector("#Bg4").append(ss);
}

// Call the init function
init();

// Check the logic based on the Sasquatch's position
function checkLogic(rand) {
  if (rand === 0) {
    alert("Congratulations!! SS successfully made it safely out of the woods");
  } else if (rand === 8) {
    alert("Oh oh...looks like the hunter found his prey :(");
  } else {
    console.log("try again");
  }
}

// Shuffle the board and place Sasquatch in a random cell
function shuffledBoard() {
  const container = document.querySelector('.container');
  const imgTag = document.querySelector("#sas");
  
  if (imgTag) {
    imgTag.parentElement.removeChild(imgTag);
  }

  container.innerHTML = '';
  shuffle(SSrandomArray).forEach(cell => {
    container.appendChild(cell);
  });

  let ss = document.createElement("img");
  ss.id = "sas";
  ss.src = "./img/sasrun.jpeg";
  let rand = Math.floor(Math.random() * 9);
  let newSS = document.querySelector(`[data-index="${rand}"]`);
  newSS.append(ss);

  // Optional: Adjust interval or use a different mechanism to check logic
  setTimeout(() => checkLogic(rand), 100);
}

// Add event listener to the button
document.querySelector('#myBtn').addEventListener('click', shuffledBoard);
