/*
  This is a CARDIO by wes bos (https://wesbos.com) of DOM. all the comments below are instructions and i'll write javaScript by following the instructions to interact & play with DOM  without seeing his solution but help of MDN, w3school and other resources
*/

// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

//  Put it in the body
document.body.appendChild(myDiv);

// make an unordered list
const myUl = document.createElement('ul');

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const listOne = document.createElement('li');
listOne.innerText = 'One';

const listTwo = listOne.cloneNode();
listTwo.innerText = 'Two';

const listThree = listOne.cloneNode();
listThree.innerText = 'Three';

myUl.append(listOne, listTwo, listThree);
myDiv.appendChild(myUl);

// create an image
const myImg = document.createElement('img');

// set the source to an image
myImg.src = 'https://source.unsplash.com/random/300x300';
// set the width to 250
myImg.width = 250;
// add a class of cute
myImg.classList.add('cute');
// add an alt of Cute Puppy
myImg.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
const myAnotherDivHTML = `
  <div class="another-div">
    <p> first paragraph </p>
    <p> second paragraph </p>
  </div>
`;

// put this div before the unordered list from above
myDiv.insertAdjacentHTML('afterbegin', myAnotherDivHTML);

// add a class to the second paragraph called warning
const myAnotherDiv = document.querySelector('.another-div');
myAnotherDiv.firstElementChild.nextElementSibling.classList.add('warning');

// remove the first paragraph
myAnotherDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  return `
 <div class="playerCard">
 <h2>${name.toUpperCase()} — ${age}</h2>
 <p>They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
 </div>
 `;
}

// make 4 player cards using generatePlayerCard
// make a new div with a class of cards
// append those cards to the div

const generatedCards = [
  generatePlayerCard('Meer', 342, 5.4),
  generatePlayerCard('Abrar', 462, 6.3),
  generatePlayerCard('Tahmid', 342, 3.6),
];
const cards = `
  <div class="cards">
  ${generatedCards.map((card) => card).join('')}
  </div>
`;

// put the div into the DOM just before the wrapper element
document.body.insertAdjacentHTML('afterbegin', cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const playerCardsHTML = [...document.querySelectorAll('.playerCard')].forEach(
  (card) => {
    card.insertAdjacentHTML('beforeend', `<button> Remove </button>`);
  }
);
// select all the buttons!
const cardButtons = document.querySelector('.cards').querySelectorAll('button');
// make out delete function
const deleteCard = (e) => {
  e.currentTarget.parentElement.remove();
};
// loop over them and attach a listener
[...cardButtons].forEach((button) =>
  button.addEventListener('click', deleteCard)
);

// NOTE:
// there is  possibilites to make above operations  more efficient (like pretend repainting of DOM) but for the purpose  following instructions i just did what instructed here
