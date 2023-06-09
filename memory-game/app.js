const cardsArray = [
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  },
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  },
]

const gridDisplay = document.querySelector('#grid');
const result = document.querySelector('#result');

cardsArray.sort(() => 0.5 - Math.random());
console.log(cardsArray);
let cardChosen = [];
let cardChosenIds = [];
const cardsWon = [];

function createBoard() {
  const gameCard = document.createElement('div');
  gameCard.setAttribute('id', 'game-card');
  for ( let i = 0; i < cardsArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'images/blank.png');
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard);
    gameCard.append(card);
  }
  gridDisplay.append(gameCard);
}

createBoard();

function flipCard() {
  const cardId = this.getAttribute('data-id');
  cardChosen.push(cardsArray[cardId].name);
  cardChosenIds.push(this.getAttribute('data-id'));
  console.log(cardChosen);
  console.log(cardChosenIds);
  this.setAttribute('src', cardsArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const cards = document.querySelectorAll('img');
  const optionOneId = cardChosenIds[0]
  const optionTwoId = cardChosenIds[1]

  console.log(cardsArray);

  if (optionOneId === optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
    alert('You have clicked on the same image');
  } else if (cardChosen[0] === cardChosen[1]) {
   cards[optionOneId].setAttribute('src', 'images/white.png');
   cards[optionTwoId].setAttribute('src', 'images/white.png');
   cards[optionOneId].removeEventListener('click', flipCard);
   cards[optionTwoId].removeEventListener('click', flipCard);
   cardsWon.push(cardChosen);
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
    alert('Sorry, try again.');

  } 
  result.innerText = cardsWon.length;
  cardChosen = [];
  cardChosenIds = [];

  if (cardsWon.length === cardsArray.length / 2) {
    result.innerText = `Congratulations, you've found them all`;
    document.getElementById('game-card').remove();
    setTimeout(() => {
      result.innerText = 0;
      createBoard();
    }, 4000)
  }
}
