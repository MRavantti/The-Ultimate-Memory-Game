let cards = [
  { card: "one", image: "" },
  { card: "two", image: "" },
  { card: "three", image: "" },
  { card: "four", image: "" },
  { card: "five", image: "" },
  { card: "six", image: "" },
  { card: "seven", image: "" },
  { card: "eight", image: "" },
  { card: "nine", image: "" },
  { card: "ten", image: "" },

]
let dubCards = cards.slice();

function flipCard() {
  this.classList.toggle('flip');
}


function shuffleCards(array) {
  let i = 0;
  let j = 0;
  let temp = null;
  
  for ( i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  
  return array;
}

card = shuffleCards(Array.from(cards));
console.log(dubCards, cards);


