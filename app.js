

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




for (let i = 0; i < 9; i++) {
  let div = document.createElement('div')
  if(i == 0) {
    div.id = 'alive'
  }else if (i == 4){
    div.id = 'SS'
  } else if (i == 8){
    div.id = 'dead'
  } else {
    div.id = 'Bg' + i
  }
div.classList.add('cell')
SSrandomArray.push(div)

document.querySelector('.container').appendChild(div)
}

function shuffledBoard (arr){
  document.querySelector('.container').innerHTML = ''
  shuffle(arr).forEach(sasquatch => 
    document.querySelector('.container').appendChild(sasquatch))
    console.log('hello')
}

document.querySelector('#myBtn').addEventListener('click',() =>  shuffledBoard(SSrandomArray))