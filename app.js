

//created an empty array for storage of indexed cells
let SSrandomArray = []

//the shuffle function consists of coping one array 
//having a while loop act on it for our math randomization
//then pushing back into our array one by one
function shuffle(array) {
  let m = array.length, t, i;
  //while thier remains elements to shuffle
  while(m) {
    //pick a remaining element
    i = Math.floor(Math.random() * m--);
    //And swap it with the current eleement.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}


/*function shuffle(array) {
  let copy = [], n = array.length, i;
  while (n) {
    i = Math.floor(Math.random() * n--);
    copy.push(array.splice(i, 1)[0]);
  }
  return copy;
} */
// this is our logic to determine if the player is a winner, loser or needs to continue




// for (let i = 0; i < 9; i++) {
//   let div = document.createElement('div')
//   if(i == 0) {
//     div.id = 'alive'
//   }else if (i == 4){
//     div.id = 'SS'
//   } else if (i == 8){
//     div.id = 'dead'
//   } else {
//     div.id = 'Bg' + i
//   }
// div.classList.add('cell')
// SSrandomArray.push(div)

// document.querySelector('.container').appendChild(div)
// }

function init() {
  for (let i = 0; i < 9; i++) {
    let div = document.createElement("div");
    if (i == 0) {
      div.id = "alive";
    } else if (i == 8) {
      div.id = "dead";
    } else {
      div.id = "Bg" + i;
    }

    div.dataset.index = i;
    div.classList.add("cell");
    SSrandomArray.push(div);

    document.querySelector(".container").appendChild(div);
  }

  let ss = document.createElement("img");
  ss.id = "sas";
  ss.src = "./img/sasrun.jpeg";
  document.querySelector("#Bg4").append(ss);
}

init();

function checkLogic(rand) {
  if (rand === 0) {
    alert("Congratulations!! SS successfully made it safely out of the woods");
  } else if (rand === 8) {
    alert("Oh oh...looks like the hunter found his prey :(");
  } else {
    console.log("try again");
  }
}

function shuffledBoard (){
  // Clear img tag and DOM elements
  let imgTag = document.querySelector("#sas");
  imgTag?.parentElement.removeChild(imgTag);
  document.querySelector('.container').innerHTML = ''

  // Shuffle array of DOM elements and display
  shuffle(SSrandomArray).forEach(sasquatch => {
    document.querySelector('.container').appendChild(sasquatch)
  })
 
  // Create new img tag and random select location
  let ss = document.createElement("img");
  ss.id = "sas";
  ss.src = "./img/sasrun.jpeg";
  let rand = Math.floor(Math.random() * 9);
  let newSS = document.querySelector(`[data-index="${rand}"]`);
  newSS.append(ss);

  setInterval(() => checkLogic(rand), 100);
}

document.querySelector('#myBtn').addEventListener('click', shuffledBoard)