let card = [
  { name: "one", image: "" },
  { name: "two", image: "" },
  { name: "three", image: "" },
  { name: "four", image: "" },
  { name: "five", image: "" },
  { name: "six", image: "" },
  { name: "seven", image: "" },
  { name: "eight", image: "" },
  { name: "nine", image: "" },
  { name: "ten", image: "" },

]
let dubCards = card.slice();
let cards = card.concat(dubCards);

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

cards = shuffleCards(Array.from(cards));
console.log(cards);

const board = document.querySelector(".board");

const deck = document.createElement("div");
deck.classList.add("deck");

board.appendChild(deck);

cards.forEach(i => {
  const card = document.createElement("div");
  
  card.classList.add('card');
  
  card.dataset.name = i.name;
  
  deck.appendChild(card);
  
  card.addEventListener("click", flipCard);
});
