const character = document.getElementById('character');
const block = document.getElementById('block');

const jump = () => {
  if (character.classList != 'animate') {
    character.classList.add('animate');
  }
  setTimeout(() => {
    character.classList.remove('animate');
  }, 500)
}

document.body.addEventListener('click', jump);

const checkedDead = setInterval(() => {
  const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 330) {
    block.style.animation = 'none';
    block.style.display = 'none';
    gameStatus();
  }
}, 10)

const gameStatus = () => {
  document.getElementById('message').innerHTML = 'Game Over!';
  document.getElementById('message').style.display = 'block';
  setTimeout(() => {
    document.getElementById('message').style.display = 'none';
  }, 3000)
}






























// const character = document.getElementById('character');
// const block = document.getElementById('block');

// function jump() {
//   if (character.classList != 'animate') {
//     character.classList.add('animate');
//   }
//   setTimeout(() => {
//     character.classList.remove('animate');
//   }, 500)
// }
// document.body.addEventListener('click', jump);

// const checkedDead = setInterval(() => {
//   const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
//   const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
//   if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
//     block.style.animation = 'none';
//     block.style.display = 'none';
//     alert('You lose!.')
//   }
// }, 10)
