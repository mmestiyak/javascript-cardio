// ## Array Cardio 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdultInPeople = people.some(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log('Is adult in people: ', isAdultInPeople);

// Array.prototype.every() // is everyone 19 or older?
const isEveryoneAdultInPeople = people.every(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log('Is Everyone Adult in people :', isEveryoneAdultInPeople);
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findCommentWithID = comments.find((comment) => comment.id === 823423);
console.log('Found Comment With ID (823423) :', findCommentWithID);

// Array.prototype.findIndex()
// Find the comment with this ID
const findCommentIndex = comments.findIndex((comment) => comment.id === 823423);
// delete the comment with the ID of 823423
const removedComment = comments.splice(findCommentIndex, 1);
console.log(removedComment);
console.log(comments);
