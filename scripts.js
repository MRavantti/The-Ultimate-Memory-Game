const card = [
  { id: "one", image: "https://pbs.twimg.com/profile_images/657809124692881408/nKsNShli_400x400.jpg" },
  { id: "two", image: "https://c-sf.smule.com/sf/s78/arr/42/1c/9a08cd9d-59ae-420d-9143-6b547fade7c4.jpg" },
  { id: "three", image: "https://pbs.twimg.com/profile_images/644368225166213120/07SwMllp.png" },
  { id: "four", image: "https://alistairgriffiths.files.wordpress.com/2015/11/rick-and-morty-season-1-review.jpg?w=256&h=256&crop=1" },
  { id: "five", image: "https://c-sf.smule.com/sf/s25/arr/1d/4c/f0cf4342-e875-4601-b47e-c74a8d021d8d.jpg" },
  { id: "six", image: "https://avatarfiles.alphacoders.com/960/96050.jpg" },
  { id: "seven", image: "https://at-cdn-s02.audiotool.com/2018/01/04/documents/6ulcf7dd/0/cover256x256-467ba6eb428547e1acb37223c53f5ec1.jpg" },
  { id: "eight", image: "https://avatarfiles.alphacoders.com/928/92848.png" },
  { id: "nine", image: "https://c-sf.smule.com/sf/s79/arr/bd/f0/b8eeb3d5-45bc-45cd-af9a-84dabfa1f415.jpg" },
  { id: "ten", image: "https://www.dailydot.com/wp-content/uploads/d42/e2/Screen20Shot202017-01-0320at204.52.2020PM.png" },
];

// TODO: 
// lägg till klass på loading body
// ta bort loading när sidan har laddats
// göm board när body har classen loading

document.body.onload = startGame();

const dubCards = card.slice();
const cards = card.concat(dubCards);

let firstCard = '';
let secondCard = '';
let count = 0;

let pairs = 0;

//shuffle cards



function createCards(e) {
  const board = document.querySelector('.board');
  const deck = document.createElement('div');
  deck.classList.add('deck');
  

  board.appendChild(deck);
  
e.forEach(i => {
  
  const backFace = document.createElement('div');
  backFace.classList.add('back-face');
  const frontFace = document.createElement('div');
  frontFace.classList.add('front-face');
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.id = i.id;
  deck.appendChild(card);
  card.appendChild(frontFace);
  card.appendChild(backFace);
  backFace.style.backgroundImage = `url(https://cdn.europosters.eu/image/750/posters/rick-and-morty-watch-i50046.jpg)`;
  frontFace.style.backgroundImage = `url(${i.image})`;
  
});
}


function flipCard() {
  const clicked = event.target;
  

  if (this === firstCard) return;
  
  if (count < 2) {
    count++;
    if (count === 1) {
      firstCard = event.target;
    }
    if (count === 2) {
      secondCard = event.target;
      
      checkForMatch();
    }
    clicked.classList.add('flip');
  };
  
};

function checkForMatch() {
   let isMatch = firstCard.dataset.id === secondCard.dataset.id;
   isMatch ? match() : unflipCards();
};

function match() {
    pairs++;
    count = 0;
    
    resetCards();
    scoreKeeper();
    
  };
  
  function unflipCards() {
    setTimeout(() => {
      count = 0;
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      resetCards();
    }, 1300);
  };
  
  function resetCards() {
    [firstCard, secondCard] = [null, null];
  }
  
  function scoreKeeper() {
    if (pairs === 10) {
      popup.classList.add('show');
    }
  }
  
  function playAgain() {
    popup.classList.remove('show')
    pairs = 0;
    removeCards();
    startGame();
  }
  
  function startGame() {
    const dubCards = card.slice();
    const cards = card.concat(dubCards);
    cards.sort(() => 0.5 - Math.random());
    
    createCards(cards);
    const cardsDiv = document.querySelectorAll('.card');
    cardsDiv.forEach(card => card.addEventListener('click', flipCard));
    
  }
  
  function removeCards() {
    const elements = document.getElementsByClassName("deck");
    while (elements.length > 0) elements[0].remove();
  }
  
  let popup = document.getElementById("popup")
  


