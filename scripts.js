let card = [
  { name: "one", image: "https://pbs.twimg.com/profile_images/657809124692881408/nKsNShli_400x400.jpg" },
  { name: "two", image: "https://c-sf.smule.com/sf/s78/arr/42/1c/9a08cd9d-59ae-420d-9143-6b547fade7c4.jpg" },
  { name: "three", image: "https://pbs.twimg.com/profile_images/644368225166213120/07SwMllp.png" },
  { name: "four", image: "https://alistairgriffiths.files.wordpress.com/2015/11/rick-and-morty-season-1-review.jpg?w=256&h=256&crop=1" },
  { name: "five", image: "https://c-sf.smule.com/sf/s25/arr/1d/4c/f0cf4342-e875-4601-b47e-c74a8d021d8d.jpg" },
  { name: "six", image: "https://avatarfiles.alphacoders.com/960/96050.jpg" },
  { name: "seven", image: "https://at-cdn-s02.audiotool.com/2018/01/04/documents/6ulcf7dd/0/cover256x256-467ba6eb428547e1acb37223c53f5ec1.jpg" },
  { name: "eight", image: "https://avatarfiles.alphacoders.com/928/92848.png" },
  { name: "nine", image: "https://c-sf.smule.com/sf/s79/arr/bd/f0/b8eeb3d5-45bc-45cd-af9a-84dabfa1f415.jpg" },
  { name: "ten", image: "https://www.dailydot.com/wp-content/uploads/d42/e2/Screen20Shot202017-01-0320at204.52.2020PM.png" },
  { name: "ten", image: "https://cdn.europosters.eu/image/750/posters/rick-and-morty-watch-i50046.jpg" },

]
let dubCards = card.slice();
let cards = card.concat(dubCards);

function flipCard() {
  const clicked = event.target;
  
  if (clicked.nodeName === 'deck') { return; }
  clicked.classList.toggle('flip');
  
};

cards.sort(() => 0.5 - Math.random());

const board = document.querySelector('.board');
const deck = document.createElement('div');
deck.classList.add('deck');
board.appendChild(deck);

cards.forEach(i => {
  
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = i.name;
  deck.appendChild(card);
  card.style.backgroundImage = `url(${i.image})`;
  
});

deck.addEventListener('click', flipCard);
